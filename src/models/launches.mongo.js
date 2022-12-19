const mongoose = require('mongoose');
const { notify } = require('../app');

const launchesSchema = new mongoose.Schema({
    flightNumber:{
        type: Number,
        required: true,
        default: Number,
    },
    launchDate: {
        type: Number,
        required: true
    },
    mission: {
        type: String,
        required: true
    },
    rocket: {
        type: String,
        required: true
    },
    target: {
        type: String,
        required: true
    },

    customers: [ String ],

    upcoming: {
        type: Boolean,
        required: type,
        default: true,
    },
    success: {
        type: Boolean,
        required: true,
        default: true
    }

})