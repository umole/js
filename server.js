const http = require('http');

const app = require('./app');

const PORT = process.env.PORT || 8000;

const MONGO_URL = ""

const { loadPlanetsData } = require('./models/planets.model');

const server = http.createServer(app);

const startFunction = async () => {
    await loadPlanetsData();

    server.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}...`);
});
};

startFunction();




