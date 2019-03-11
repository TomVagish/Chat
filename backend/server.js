const http = require('http');
const app = require('./app');

// Define port to server listen
const port = process.env.PORT || 3000;


const server = http.createServer(app); // create a server with the app var.


// server start listen to the port
// server.listen(port, () => {
//     console.log(`started on port: ${port}`);
// });

server.listen(port);