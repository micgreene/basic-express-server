'use strict';

module.exports = (err, req, res, next) => {
  const message = 'This Page Wasn\'t Found! Please Re-Check Your Route';

  res.status(404).json(message);
}