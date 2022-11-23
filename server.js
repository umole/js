const express = require('express');
const { fork } = require('child_process');


const app = express();

function delay(duration) {
    const startTime = Date.now();

    while (Date.now() - startTime < duration) {
        //event is blocked...
    }
}

app.get('/', (req, res) => {
    res.send(`Performance Example ${process.pid}`);
});

app.get('/timer', (req, res) => {
    // delay the response by a few secs
    delay(8000);
    res.send(`Wddup Nigger! Wake up. ${process.pid}`);
})

console.log('server.js started...')
console.log('worker process started.')
app.listen(3000);


