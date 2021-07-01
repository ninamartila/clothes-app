const { Produk, Order, OrderItem } = require('../models')
const keranjang = []
class ControllerCustomer {
    static getProdukCustomer(req, res) {
        Produk.findAll()
            .then(data => {
                res.render('produkCustomer', { data })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getOrderCustomer(req, res) {
        const dataId = req.params.id

    }
}

module.exports = ControllerCustomer