const express = require('express'); // import the express package

const accountRoutes = require('./routes/userRoutes/accountRoutes')

const server = express(); // creates the server
const port = process.env.PORT || 5000;

// handle requests to the root of the api, the / route
server.get('/', (req, res) => {
    res.send('Hello from Express');
  });

  //routes
server.use('/accounts', accountRoutes);

  // watch for connections on port 5000
server.listen(port, () =>
console.log(`Server running on ${port}`)
);