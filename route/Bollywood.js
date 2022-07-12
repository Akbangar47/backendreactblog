const express = require('express')
const bollyController = require('../details/Bollywood')

const bolly = express.Router()
bolly.route("/bolly")
.get(bollyController.apiController)
module.exports = bolly