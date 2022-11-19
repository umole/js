//const { map } = require("../app");

const launches = new Map();

let latestFlightNumber = 100;

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

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber,
        Object.assign(launch, {
            success: true,
            upcomming: true,
            customer: ["Zero to mastery", "NASA"],
            flightNumber: latestFlightNumber,
        })
    );
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
};