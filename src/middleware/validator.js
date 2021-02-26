'use strict';

const validator = (req, res, next) => {
  let name = req.query.name;

  if(!name){
    next('name not provided'); //error handling statement
  }else{
    next();
  }
}

module.exports = validator;