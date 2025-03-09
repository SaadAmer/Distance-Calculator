// Database Config file.

import dotenv from "dotenv";
dotenv.config();

export const config = {
  PORT: process.env.PORT,
  POSTGRES: {
    USER: process.env.POSTGRES_USER,
    PASSWORD: process.env.POSTGRES_PASSWORD,
    DB: process.env.POSTGRES_DB,
    HOST: process.env.POSTGRES_HOST,
    PORT: Number(process.env.POSTGRES_PORT),
  },
};