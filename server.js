const express = require('express');

const app = express();

function delay(duration) {
    const startTime = Date.now();

    while (Date.now() - startTime < duration) {
        //event is blocked...
    }
}

app.get('/', (req, res) => {
    res.send('Performance Example');
});

app.get('/timer', (req, res) => {
    // delay the response by a few secs
    delay(8000);
    res.send('Hey dude! Wake up.');
})

app.listen(3000);