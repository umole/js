function getMessage(req, res) {
    res.send('<ul><li>Las Vegas</li><li>Los Angeles</li><li>Miami</li></ul>');
}

function postMessage(req, res) {
    console.log('updating messages...');
}

module.exports = {
    getMessage,
    postMessage,
}
