const { response } = require('../../app');
const { 
    getAllLaunches,
    addNewLaunch,
    existLaunchWithId,
    abortLaunchWithId
} = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
    const launch =  req.body;

    if (!launch.mission || !launch.rocket || !launch.target || !launch.launchDate) {
        return res.status(400).json({
            error: "Missing launch property!!",
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

function httpAbortLaunch(req, res) {
    const launchId = Number(req.params.id);


    //if launch doesn't exist
    if (!existLaunchWithId(launchId)) {
        return response.status(404).json({
            error: "Launch not found",
        });
    } 
    //if launch does exist
    const aborted = abortLaunchWithId(launchId);
    return response.status(200).json(aborted)
}

module.exports = {
    httpGetAllLaunches, 
    httpAddNewLaunch,
    httpAbortLaunch
}
