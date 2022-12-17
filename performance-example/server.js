const express = require('express');
const cluster = require('cluster');
const os = require('os');

const app = express();

function delay(duration) {
    const startTime = Date.now()
    while(Date.now() - startTime < duration) {
        //...
    }
}

app.get('/', (req, res) => {
    res.send(`Performace example: ${process.pid}`);
});

app.get('/timer', (req, res) => {
    //delay the response
    delay(8000);
    res.send(`Hey Bro, Wake up!!!!!!! ${process.pid}`);
});

if (cluster.isMaster) {
    console.log('This is the master cluster');
    const NUM_CLUSTERS = os.cpus();
    for (cpu of NUM_CLUSTERS) {
        cluster.fork();
    }
} else {
    console.log('Worker process started!');
    app.listen(3000);
}



