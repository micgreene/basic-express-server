'use strict';

const logger = (req, res, next) => {
  let method = req.method;
  let path = req.path;

  console.log(`Path:   ${path}
Method: ${method}
`);

  next();
};

module.exports = logger;