'use strict';

module.exports = (err, req, res, next) => {
  const error = err.message ? err.message : err;
  
  const options = {
    status: 500,
    message: error
  }

  res.status(500).send(options);
}