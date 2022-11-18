//const { map } = require("../app");

const launches = new Map();

// const launches = new map();

const launch = {
    flightNumber: 100,
    mission: "Kepler Exoplanet X",
    rocket: 'Explore 1', 
    launchDate: new Date("July 19, 2022"),
    destination: "Kepler-442 b",
    customer: ["Andy", 'Umole'],
    upcomming: true,
    success: true,
};

launches.set(launch.flightNumber, launch);

function getAllLaunches() {
    return Array.from(launches.values());
}

module.exports = {
    getAllLaunches,
};