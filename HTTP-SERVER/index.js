const http = require('http')

const PORT = 3000;

const server = http.createServer();
server.on('request', (req, res) => {
    if (req.url === '/friends') {
        res.statusCode = 200;
        res.setHeader('content-Type', 'application/json')
        res.end(JSON.stringify({
            name: "Andrew Umole",
            age: 23,
            skill: "Progrmming",
            specialisation: "Backend",
            language: "JavaScript"
        }));
    } else if (req.url === '/messages') {
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