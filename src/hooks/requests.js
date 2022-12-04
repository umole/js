const API_URL = 'http://localhost:8000/v1';

async function httpGetPlanets() {
  // TODO: Once API is ready.
  const response = await fetch(`${API_URL}/planets`)
  // Load planets and return as JSON.
  return await response.json();
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  const response = await fetch(`${API_URL}/launches`);
  // Load launches, sort by flight number, and return as JSON.
  const fetchLaunchees = await response.json();
  return fetchLaunchees.sort((a, b) => a - b);
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  try {
    return await fetch (`${API_URL}/launches`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    });
    // Submit given launch data to launch system.
  } catch (err) {
    return {
      ok: false,
    };
  }
}

  // TODO: Once API is ready.
  // Delete launch with given ID.
async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "delete",
    });
  } catch (err) {
    return {
      ok: false,
    };
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};