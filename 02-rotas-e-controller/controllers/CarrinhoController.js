const CarrinhoController = {
  removeItem: function () { },
  getItem: function () { },
  addItem: function (req, res) {
    const {item} = req.params
    res.send(`Item "${item}" Adicionado`);
  },
};

module.exports = CarrinhoController;