const series = require("../models/series.js")

const controller = {
  index: (req, res) => res.send(series),
  porGenero: (req, res) => res.send(series.filter(serie => serie.genero.toLowerCase() === req.params.genero.toLowerCase())),
}

module.exports = controller