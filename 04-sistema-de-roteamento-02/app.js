const express = require("express")
const seriesRouter = require("./routes/series")

const app = express()
const port = 3000

app.use('/series', seriesRouter)

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))