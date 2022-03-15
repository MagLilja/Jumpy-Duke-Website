const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors())

const port = process.env.PORT ;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// Require player routes
const playerRoutes = require('./routes/players.routes');

// using as middleware
app.use('/api/players', playerRoutes)


// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});