// File for the front end api

const API_URL = "http://localhost:3000";

/**
 * Fetches the distance between a source and a destination for a given user.
 *
 * @param {string} userId The ID of the user.
 * @param {string} source The starting location.
 * @param {string} destination The ending location.
 * @returns {Promise<object>} A Promise that resolves with the distance data.
 * @throws {Error} If the API request fails or returns an error.
 */
export async function getDistance(userId, source, destination) {
  try {
    const response = await fetch(`${API_URL}/distance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId, source, destination }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error from server:", errorData);
      throw new Error(errorData.error || "Failed to fetch distance.");
    }

    const data = await response.json()
    console.log("Successfully received data:", data)
    return data;

  } catch (error) {
    console.error("Error fetching distance:", error);
    throw error;
  }
}

/**
 * Fetches the history for a given user.
 *
 * @param {string} userId The ID of the user.
 * @returns {Promise<object>} A Promise that resolves with the history data.
 * @throws {Error} If the API request fails.
 */
export async function getHistory(userId) {
  try {
    console.log("Fetching History with ID", userId)
    const response = await fetch(`${API_URL}/history/${userId}`);

    if (!response.ok) {
      const error = await response.text()
      console.log("History Error", error)
      throw new Error("Failed to fetch history.");
    }

    const data = await response.json()
    console.log("History data", data)
    return data;
  } catch (error) {
    console.error("Error fetching history:", error);
    throw error;
  }
}