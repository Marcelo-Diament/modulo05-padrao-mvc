const series = require("../models/series.js")

const controller = {
  index: (req, res) => res.send(series)
}

module.exports = controller