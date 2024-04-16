const express = require("express");
const cors = require('cors');


const backendApp = express();

const corsOptions = {
    origin: 'http://127.0.0.1:5000', 
    credentials: true
  };
  backendApp.use(cors(corsOptions));


  backendApp.use(express.json());

  backendApp.use('/services', require('./services/service.routes'));


module.exports = backendApp;
