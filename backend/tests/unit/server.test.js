/**
 * @file server.test.js
 * @description Unit tests for the Distance API.
 */

import request from "supertest";
import { app } from "../../src/server.js";
import { jest } from "@jest/globals";

await jest.unstable_mockModule("../../src/db.js", () => ({
  pool: {
    query: jest.fn(),
  },
}));

await jest.unstable_mockModule("../../src/utils.js", () => ({
  geocode: jest.fn(async (address) => {
    if (address.includes("%%%%%%") || address.includes("######")) {
      throw new Error("Invalid addresses provided.");
    }
    return { lat: 40.7128, lon: -74.006 };
  }),
  calculateDistance: jest.fn(() => 4500),
}));

const { geocode, calculateDistance } = await import("../../src/utils.js");

beforeEach(() => {
  jest.clearAllMocks();
});

/**
 * @test POST /distance - Should return 400 if user_id is missing
 */
/**
 * Given a request to the /distance endpoint
 * When the request body does not contain a user_id
 * Then the response status should be 400 and the response body should contain an error message
 */
test("POST /distance should return 400 if user_id is missing", async () => {
  const response = await request(app).post("/distance").send({
    source: "New York, USA",
    destination: "Los Angeles, USA",
  });

  expect(response.status).toBe(400);
  expect(response.body).toHaveProperty("error", "Invalid user ID format");
});

/**
 * @test POST /distance - Should return 400 if addresses are missing
 */
/**
 * Given a request to the /distance endpoint
 * When the request body contains a user_id but missing source and/or destination
 * Then the response status should be 400, and the response body should contain an error message.
 */
test("POST /distance should return 400 if addresses are missing", async () => {
  const response = await request(app).post("/distance").send({
    user_id: "user123",
  });

  expect(response.status).toBe(400);
  expect(response.body).toHaveProperty(
    "error",
    "Invalid addresses. Only text-based inputs are allowed."
  );
});

/**
 * @test POST /distance - Should return 400 for invalid addresses
 */
/**
 * Given a request to the /distance endpoint with a valid user_id
 * When the request body contains invalid source and destination addresses
 * Then the geocode function should reject with an error,
 *  the response status should be 400, and the response body should contain an error message.
 */
test("POST /distance should return 400 for invalid addresses", async () => {
  geocode.mockRejectedValueOnce(new Error("Invalid addresses provided."));

  const response = await request(app).post("/distance").send({
    user_id: "user123",
    source: "%%%%%%",
    destination: "######",
  });

  expect(response.status).toBe(400);
  expect(response.body).toHaveProperty("error", "Invalid addresses provided.");
});

/**
 * @test GET /history/:user_id - Should return 400 if user_id is missing
 */
/**
 * Given a request to the /history/:user_id endpoint
 * When the user_id parameter is missing from the URL
 * Then the response status should be 404
 */
test("GET /history/:user_id should return 400 if user_id is missing", async () => {
  const response = await request(app).get("/history/");

  expect(response.status).toBe(404);
});