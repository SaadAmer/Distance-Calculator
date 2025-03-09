DROP TABLE IF EXISTS queries;

CREATE TABLE queries (
  id SERIAL PRIMARY KEY,
  user_id TEXT NOT NULL,
  source_address TEXT NOT NULL,
  destination_address TEXT NOT NULL,
  distance_km FLOAT NOT NULL,
  distance_miles FLOAT NOT NULL
);