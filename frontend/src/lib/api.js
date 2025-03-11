// File for the front end api
import log from 'loglevel';

log.setLevel('debug');

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

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
  log.debug('Fetching distance:', { userId, source, destination });
  try {
    const response = await fetch(`${API_URL}/distance`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId, source, destination }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      log.error('Error from server:', errorData);
      throw new Error(errorData.error || "Failed to fetch distance.");
    }

    const data = await response.json();
    log.debug('Successfully received distance data:', data);
    return data;

  } catch (error) {
    log.error('Error fetching distance:', error, { userId, source, destination });
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
  log.debug('Fetching history:', { userId });
  try {
    log.debug('Fetching History with ID', userId);
    const response = await fetch(`${API_URL}/history/${userId}`);

    if (!response.ok) {
      const error = await response.text();
      log.error('History error:', error, {userId});
      throw new Error("Failed to fetch history.");
    }

    const data = await response.json();
    log.debug('History data:', data);
    return data;
  } catch (error) {
    log.error('Error fetching history:', error, { userId });
    throw error;
  }
}