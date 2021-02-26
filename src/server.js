'use strict';

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const logger = require('./middleware/logger.js');
const validate = require('./middleware/validator.js');
const notFoundHandler = require('./error-handlers/404.js');

const errorHandler = require('./error-handlers/500.js');

dotenv.config();

const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(logger);
app.use(validate);

app.get('/person', logger, validate, (req,res) => {
  let name = req.query.name;
  res.status(200).json({ 'name enter': name});
})

//Any routes not listed above are not recognized and send the 494 status via the 404.js file.
app.use('*', notFoundHandler);

//sends out error code 500 if something happens during routing, should always be at the bottom of the routes
app.use(errorHandler);

//exported function to be called by index.js upon 'npm run start'
function start(port){
  app.listen(port, () => {
    console.log(`Listening on PORT ${port}`);
  })
}

module.exports =
  {
    app: app,
    start: start
  };
