// reat first node servers 

// import http protocol

const http = require('http');

const app = http.createServer(function simpleServer(req, res) {
    res.end('Hello Aman! Server is running.');
});

app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});