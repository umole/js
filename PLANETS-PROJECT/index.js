const { parse } = require('csv-parse');
const fs = require('fs');

const result = [];

fs.createReadStream('kepler_data.csv')
    .on('data', (data) => {
        result.push(data);
    })
    .on('Error', (err) => {
        console.log(err);
    })
    .on('end', () => {
        console.log(result)
        console.log('Done!')
    })


// fs.createReadStream('kepler_dataa.csv')
//     .on('data', (data) => {
//         result.push(data);
//     })
//     .on('Error', (err) => {
//         console.log(err);
//     })
//     .on('end', () => {
//         console.log(result);
//         console.log('Done processing files')
//     });



//parse()