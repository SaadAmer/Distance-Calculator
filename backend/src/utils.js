// file for utility functions in distance app backend.

import axios from "axios";
import { logger } from "./logger.js";

const NOMINATIM_URL = "https://nominatim.openstreetmap.org/search";

/**
 * Geocodes an address using the Nominatim API.
 * @param {string} address The address to geocode.
 * @param {number} [retries=3] The number of times to retry the request if it fails.
 * @returns {Promise<{lat: number, lon: number}>} An object containing the latitude and longitude.
 * @throws {Error} If the address cannot be geocoded after the specified number of retries, or if the address is invalid.
 * @async
 */
export const geocode = async (address, retries = 3) => {
  const url = `${NOMINATIM_URL}?q=${encodeURIComponent(address)}&format=json&limit=1`;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      logger.info(`Geocoding address: ${address}, Attempt: ${attempt}`);
      const response = await axios.get(url);

      if (response.data.length === 0) {
        throw new Error("Invalid addresses provided.");
      }

      return { lat: parseFloat(response.data[0].lat), lon: parseFloat(response.data[0].lon) };

    } catch (error) {
      logger.error(`Geocode attempt ${attempt} failed for ${address}: ${error.message}`);
      if (attempt === retries) {
        logger.error(`Failed to geocode address after ${retries} attempts: ${address}`);
        throw new Error("Invalid addresses provided.");
      }
      // Exponential backoff (1s, 2s, 3s)
      await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
    }
  }
};

export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const toRad = (val) => (val * Math.PI) / 180;
  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};