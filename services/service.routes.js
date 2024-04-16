const express = require("express");
const serviceController = require("./service.controller");
const { errorWrapper } = require("./lib/error/errorWrapper");


const router = express.Router();

router.post("/sendMail", errorWrapper(serviceController.sendGift));




module.exports = router;
