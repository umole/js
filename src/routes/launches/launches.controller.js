const { 
    getAllLaunches,
    addNewLaunch,
} = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
    const launch =  req.body;

    if (!launch.mission || !launch.rocket || !launch.destination || !launch.launchDate) {
        return res.status(400).json({
            error: "Missing launch property",
        });
    }

    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)) {
        return res.status(400).json({
            error: 'Invalid date',
        });
    }

    addNewLaunch(launch);
    return res.status(201).json(launch);
}


module.exports = {
    httpGetAllLaunches, 
    httpAddNewLaunch,
}
