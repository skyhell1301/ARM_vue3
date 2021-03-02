let express = require('express');
const http = require('http')
// eslint-disable-next-line no-unused-vars
let path = require('path');
let serveStatic = require('serve-static');
const app = express();

app.use(serveStatic(__dirname + "/dist"));
let port = process.env.PORT || 5000;
let hostname = '10.10.0.11';

const server = http.createServer(app)

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

process.on('SIGINT', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing http server.');
    server.close(() => {
        console.log('Http server closed.');
    });
});

