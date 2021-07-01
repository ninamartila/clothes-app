const { Produk } = require('../models')

class ControllerAdmin {
    static getProduk(req, res) {
        Produk.findAll()
            .then(data => {
                console.log('ini', data);
                res.render('produkAdmin', { data })
            })
            .catch(err => {
                console.log('error', err);
                res.send(err)
            })
    }

    static getAddProduk(req, res) {
        res.render('addProdukAdmin')
    }

    static postAddProduk(req, res) {
        const newData = {
            images: req.body.images,
            namaProduk: req.body.namaProduk,
            harga: req.body.harga,
            stok: req.body.stok
        }

        Produk.create(newData)
            .then(() => {
                res.redirect('/admins/produks')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getEditProduk(req, res) {

    }

    static postEditProduk(req, res) {

    }
}

module.exports = ControllerAdmin