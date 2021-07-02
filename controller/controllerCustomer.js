const { Produk, Order, Customer } = require('../models')
const keranjang = []
class ControllerCustomer {
    static getProdukCustomer(req, res) {
        const dataIdCustomer = req.params.idCustomer
        const dataOrder = {
            kodeTransaksi: "",
            kurir: "",
            NomorResi: "",
            status: "panding"
        }

        Order.findAll({
            attributes: ['id', 'status']
        })
            .then(data => {
                if (data.length === 0 || data.status !== 'panding') {
                    Order.create(dataOrder)
                }
                return Produk.findAll()
            })
            .then(data => {
                res.render('produkCustomer', { data, dataIdCustomer })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getOrderCustomer(req, res) {
        const dataId = req.params.id
        const dataIdCustomer = req.params.idCustomer

        // Customer.findOne({
        //     where: {
        //         id: dataIdCustomer
        //     },
        //     include: [
        //         { model: Order }
        //     ]
        // })
        // Order.findAll()
        //     .then(data => {
        //         console.log('data', data);
        keranjang.push(data)
        res.render('produkKeranjang', { data: keranjang })
        // })
    }

    static getDeleteCustomer(req, res) {
        const dataId = req.params.id

        const keranjang = keranjang.filter((item) => {
            item.id === dataId
        })

        req.redirect('/customers/produks')
    }
}

module.exports = ControllerCustomer