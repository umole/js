const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
    keplerName: {
        type: String,
        reqired: true
    }
});

//This connects the planetSchema to the planets collection
model.export = mongoose.model('Planet', planetSchema);