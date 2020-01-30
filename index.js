require('dotenv').config();

const server = require('./api/server');

const port = process.env.port || 5000;

server.listen(port, () => {
    console.log(`Server ONLINE at ${port}`)
})