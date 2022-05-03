const express = require('express')
const router = express.Router();
const SeriesController = require('../controllers/SeriesController')

router.get('/:id', SeriesController.show)
router.get('/', SeriesController.index)

module.exports = router