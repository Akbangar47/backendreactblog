const express = require('express')
const fitController = require('../details/Fitness')

const fit = express.Router()
fit.route("/fit")
.get(fitController.apiController)
module.exports = fit