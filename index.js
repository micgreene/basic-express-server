'use strict';

const server = require('./src/server.js');
const dotenv = require('dotenv');

let PORT = process.env.PORT;

dotenv.config();

server.start(PORT);