// src/api.js
const API_URL = 'http://localhost:3010'; // The port specified by json-server

export async function fetchTasks() {
  try {
    const response = await fetch(`${API_URL}/tasks`);
    if (!response.ok) {
      throw new Error('Failed to fetch tasks.');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
}
