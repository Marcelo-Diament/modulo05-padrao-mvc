const express = require("express")
const controller = require("../controllers/SeriesController")

const router = express.Router()

router.get('/', controller.index)
router.get('/criar', controller.criar)
router.get('/:genero', controller.porGenero)

module.exports = router