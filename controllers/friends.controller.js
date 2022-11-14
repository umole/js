const model = require('../models/friends.models');

function postFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            eror: 'Bad request'
        });
    }
    const newFriend = {
        name: req.body.name,
        id: model.length,
    }
    model.push(newFriend);
    res.json();
}

function getFriends(req, res) {
    res.json(model);
}

function getFriend(req, res) {
    const friendId = Number(req.params.friendId);
    const friend = model[friendId];
    if (friend) {
        res.status(200).json(friend)
    } else {
        res.status(404).json({
            Error: "Not Found."
        });
    };
}

module.exports = {
    getFriend,
    postFriend,
    getFriends,
}