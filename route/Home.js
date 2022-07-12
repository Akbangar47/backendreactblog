const express = require('express')
const homeController = require('../details/Home')

const home = express.Router()
home.route("/home")
.get(homeController.apiController)
module.exports = home