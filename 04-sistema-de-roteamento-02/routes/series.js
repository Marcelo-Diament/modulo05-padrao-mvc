const express = require("express")
const controller = require("../controllers/SeriesController")

const router = express.Router()

router.get('/', controller.index)

module.exports = router