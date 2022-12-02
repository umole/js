//const { map } = require("../app");

const launches = require('./launches.mongoose');

const launchesDatabase = new Map();

let latestFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: "Kepler Exoplanet X",
    rocket: 'Explore 1', 
    launchDate: new Date("July 19, 2022"),
    target: "Kepler-442 b",
    customers: ["Andy", 'Umole'],
    upcomming: true,
    success: true,
};

saveLaunch(launch);

function existLaunchWithId(launchId) {
    return launches.has(launchId);
}

function getAllLaunches() {
    return Array.from(launches.values());
}

async function saveLaunch(launch) {
    await launchesDatabase.updateOne({
        flightNumber: launch.flightNumber,
    }, launch, {
        upsert: true,
    });
};



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

function abortLaunchWithId(launchId) {
   const aborted =  launches.get(launchId);
   aborted.upcomming = false;
   aborted.success = false;
   return aborted;

}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    existLaunchWithId,
    abortLaunchWithId
};