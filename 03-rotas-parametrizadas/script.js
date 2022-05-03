const express = require('express');
const app = express();
const series = [
  {
    id: 1,
    nome: "Irmão do Jorel",
  },
  {
    id: 2,
    nome: "Um maluco no pedaço",
  },
];

app.get("/series", (req, res) => res.send(series))

app.get("/series/:id", (req, res) => res.send(series.filter(serie => serie.id == req.params.id)[0]))

app.listen(3000, () => console.log("Servidor rodando na porta 3000"))