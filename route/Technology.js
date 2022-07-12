const express = require('express')
const techController = require('../details/Technology')

const tech= express.Router()
tech.route("/tech")
.get(techController.apiController)
module.exports = tech