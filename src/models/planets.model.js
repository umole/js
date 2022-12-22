const { parse } = require('csv-parse');
const fs = require('fs');
const path = require('path');

const planets = require('./planets.mongo');

const habitablePlanets = [];


function isHabbitablePlanet(planet) {
    return planet['koi_disposition'] === "CONFIRMED" 
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}

/* 
const promise = new Promise((resolve, reject) => {
    resolve(42);
});
promise.then((result) => {

});

const result = await promise;
console.log(result);

*/

function loadPlanetsData() {
    return new Promise((resolve, reject) => {
        fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv'))
    .pipe(parse( {
        comment: "#",
        columns: true
    }))
    .on('data', async (data) => {
        if (isHabbitablePlanet(data)) {
            // // insert + update = upsert
            await planets.updateOne({
                keplerName: data.kepler_name
            }, {
                keplerName: data.kepler_name
            }, {
                upsert: true,
            });
        }
    })
    .on('Error', (err) => {
        console.log(err);
        reject(err);
    })
    .on('end', () => {
        console.log(`${habitablePlanets.length} habitable planets were found!`);
        resolve();
    });
});
}

async function getAllPlanets() {
    return await planets.find({});
}

module.exports = {
    loadPlanetsData,
    getAllPlanets
}