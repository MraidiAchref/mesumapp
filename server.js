require("dotenv").config();

const backendApp = require("./backendApp");
const express = require("express");


const port = process.env.PORT_CLIENT || 3000;
const server = require("http").createServer(backendApp);
server.listen(port, () => {
  console.log(`Backend Server started on port ${port}`);
});

module.exports = server;
