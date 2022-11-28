const http = require('http');
const mongoose = require('mongoose');

const app = require('./app');

const PORT = process.env.PORT || 8000;

const MONGO_URL = 'mongodb+srv://nasa-api:cOoFWGWqmxr8G99V@cluster0.ga3lket.mongodb.net/nasa?retryWrites=true&w=majority'

const { loadPlanetsData } = require('./models/planets.model');

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('MongoDB Connection Ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

const startFunction = async () => {
    await mongoose.connect(MONGO_URL);
    await loadPlanetsData();

    server.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}...`);
    });
};

startFunction();




