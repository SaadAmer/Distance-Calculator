// Back-end Connection to database.

import pkg from "pg";
import { config } from "./config.js";
import { logger } from "./logger.js";

const { Pool } = pkg;

export const pool = new Pool({
  user: config.POSTGRES.USER,
  host: config.POSTGRES.HOST,
  database: config.POSTGRES.DB,
  password: config.POSTGRES.PASSWORD,
  port: config.POSTGRES.PORT,
});

pool.on("connect", () => logger.info("Connected to PostgreSQL database"));