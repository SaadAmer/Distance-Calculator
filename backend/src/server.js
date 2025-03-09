// Main server file used in Distance app.

import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { pool } from "./db.js";
import { logger } from "./logger.js";
import { config } from "./config.js";
import { geocode, calculateDistance } from "./utils.js";
import validator from 'validator';

const app = express();
app.use(express.json());
app.use(cors());

const limiter = rateLimit({ windowMs: 60 * 1000, max: 10 });
app.use("/distance", limiter);

/**
 * @description Calculates the distance between two addresses.
 * @route POST /distance
 * @param {object} req - Express request object.
 * @param {object} req.body - Request body.
 * @param {string} req.body.user_id - The user's ID.  Must be alphanumeric.
 * @param {string} req.body.source - The source address. Must be ASCII.
 * @param {string} req.body.destination - The destination address. Must be ASCII.
 * @param {object} res - Express response object.
 * @returns {Promise<void>}
 * @throws {object} 400 - Invalid user ID, source, or destination.
 * @throws {object} 500 - Internal server error.
 */
app.post("/distance", async (req, res) => {
  try {
    let { user_id, source, destination } = req.body;

    if (!user_id || !validator.isAlphanumeric(user_id)) {
      return res.status(400).json({ error: "Invalid user ID format"});
    }

    if (!source || !destination || !validator.isAscii(source) || !validator.isAscii(destination)) {
      return res.status(400).json({ error: "Invalid addresses. Only text-based inputs are allowed." });
    }

    source = source.trim();
    destination = destination.trim();

    const [src, dest] = await Promise.all([geocode(source), geocode(destination)]);

    const distance_km = calculateDistance(src.lat, src.lon, dest.lat, dest.lon);
    const distance_miles = distance_km * 0.62137;

    await pool.query(
      "INSERT INTO queries (user_id, source_address, destination_address, distance_km, distance_miles) VALUES ($1, $2, $3, $4, $5)",
      [user_id, source, destination, distance_km, distance_miles]
    );

    res.json({ distance_km, distance_miles });
  } catch (error) {
    if (error.message === "Invalid addresses provided.") {
        logger.error(`Error calculating distance: ${error.message}`);
        return res.status(400).json({ error: "Invalid addresses provided." });
    } else {
        logger.error(`Error calculating distance: ${error.message}`);
        res.status(500).json({ error: "Calculation Failed. Something went wrong." });
    }
  }
});

/**
 * @description Retrieves the query history for a specific user.
 * @route GET /history/:user_id
 * @param {object} req - Express request object.
 * @param {object} req.params - Request parameters.
 * @param {string} req.params.user_id - The user's ID.
 * @param {object} res - Express response object.
 * @returns {Promise<void>}
 * @throws {object} 400 - User ID is required.
 * @throws {object} 500 - Error fetching history.
 */
app.get("/history/:user_id", async (req, res) => {
  try {
    const { user_id } = req.params;
    if (!user_id) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const { rows } = await pool.query(
      "SELECT * FROM queries WHERE user_id = $1 ORDER BY id DESC",
      [user_id]
    );

    logger.info(`History retrieved for user ${user_id}: ${rows.length} records found`);
    res.json(rows);
  } catch (error) {
    logger.error(`Error retrieving history for user ${req.params.user_id}: ${error.message}`);
    res.status(500).json({ error: "Error fetching history" });
  }
});

/**
 * @description General error handling middleware.
 * @param {object} err - The error object.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {object} next - Express next middleware function.
 * Keeping the next parameter as it could be used for the 
 * next middleware (in future development)
 */
app.use((err, req, res, next) => {
  logger.error(`Unexpected error: ${err.message}`);
  res.status(500).json({ error: "Something went wrong. Please try again later." });
});

app.listen(config.PORT, () => logger.info(`Server running on port ${config.PORT}`));

export { app };