const mongoose = require('mongoose');

function planetsSchema() {
    mongoose.Schema({
        keplerName: {
            type: String,
            reqired: true
        }
    });
}


//This connects the planetSchema to the planets collection
module.export = mongoose.model('Planet', planetsSchema);