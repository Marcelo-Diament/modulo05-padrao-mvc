const series = require("../models/series")
const path = require("path")

const SeriesController = {
  index: (req, res) => res.sendFile(path.join(__dirname, "..", "views", "series.html")),
  show: (req, res) => res.send(series.filter(serie => serie.id == req.params.id)[0])
};

module.exports = SeriesController;