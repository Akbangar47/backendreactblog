const express = require('express')
const hollyController = require('../details/Hollywood')

const holly = express.Router()
holly.route("/holly")
.get(hollyController.apiController)
module.exports = holly