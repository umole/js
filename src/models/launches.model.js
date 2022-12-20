//const launches = require('./launches.mongo');

const launches = new Map();

let latestFlightNumber = '100';

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration 1',
    rocket: 'Exporer 1sI',
    launchdate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customers: ['Andrew', 'Umole'],
    upcoming: true,
    success: true 
};

launches.set(launch.flightNumber, launch);

function existLaunchWithId(launchId) {
    return launches.has(launchId)
}

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber, 
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customers: ['Andrew', 'Umole'],
            flightNumber: latestFlightNumber,
        })
    );
}

function abortLaunchWithId(launchId) {
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    existLaunchWithId,
    getAllLaunches,
    addNewLaunch,
    abortLaunchWithId
}