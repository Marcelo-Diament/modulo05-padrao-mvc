const express = require("express")
const router = require("./routes/script.js")
const app = express()
const port = 3000

app.use("/", router)

app.listen(port, () => console.log(`Servidor rodando com sucesso na porta ${port}`))