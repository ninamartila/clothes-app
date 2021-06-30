const { Produk } = require('../models')

class ControllerProduk {
    static getProduck(req, res) {
        Produk.findAll()
            .then(data => {
                res.render('produk', { data })
            })
            .catch(err => {
                res.end(err)
            })
    }
}

module.exports = ControllerProduk