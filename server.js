const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send({
        id: 0,
        name: "Sir Andrew Umole"
    });
});

app.get('/messages', (req, res) => {
    res.send('<ul><li>Nevada</li><li>California</li><li>New York</li></ul>');
});

app.post('/messages', (req, res) => {
    console.log('updating messages...');
})
app.listen((PORT), () => {
    console.log(`Server is listening on port: ${PORT}...`);
});

