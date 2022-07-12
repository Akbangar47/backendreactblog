const express = require('express')
const foodController = require('../details/Food')

const food = express.Router()
food.route("/food")
.get(foodController.apiController)
module.exports = food