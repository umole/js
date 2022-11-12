const http = require('http')

const PORT = 3000;

const server = http.createServer();

const friends = [
    {
        id: 0,
        name: "Nikola Tesla"
    },
    {
        id: 1,
        name: "Albert Eistien"
    },
    {
        id: 2,
        name: "Isaac Newton"
    },
    {
        id: 3,
        name: "Elon Musk"
    }
]

server.on('request', (req, res) => {
    // Split the URL by '/'
    const items = req.url.split("/")

    if (items[1] === 'friends') {
        res.statusCode = 200;
        res.setHeader('content-Type', 'application/json')
        if (items.length === 3) {
            const itemIndex = Number(items[2]);
            res.end(JSON.stringify(friends[itemIndex]));
        } else {
            res.end(JSON.stringify(friends));
        }
    } else if (items[1] === 'messages') {
        res.setHeader('content-Type', 'text/html');
        res.write('<html>');
        res.write('<body>');
        res.write('<ul>');
        res.write('<li>Hello Andre!</li>');
        res.write('<li>What are your toughts on cryptocurrency?</li>');
        res.write('</ul>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else {
        res.statusCode = 404;
        res.end()
    }
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
}); //127.0.0.1 => localhost