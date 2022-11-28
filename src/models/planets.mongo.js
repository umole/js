const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
    kepleName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Planet', planetSchema);