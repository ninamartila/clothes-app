const { Produk } = require('../models')

class ControllerAdmin {
    static getProdukAdmin(req, res) {
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

    static getAddProdukAdmin(req, res) {
        res.render('addProdukAdmin')
    }

    static postAddProdukAdmin(req, res) {
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

    static getEditProdukAdmin(req, res) {
        const dataId = req.params.id

        Produk.findOne({
            where: {
                id: dataId
            }
        })
            .then(data => {
                res.render('editProdukAdmin', { data })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static postEditProdukAdmin(req, res) {
        const dataId = req.params.id
        const changeData = {
            images: req.body.images,
            namaProduk: req.body.namaProduk,
            harga: req.body.harga,
            stok: req.body.stok
        }
        console.log('ini data', changeData);

        Produk.update(changeData, {
            where: {
                id: dataId
            }
        })
            .then(() => {
                res.redirect('/admins/produks')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static getDeleteProdukAdmin(req, res) {
        const dataId = req.params.id

        Produk.destroy({
            where: {
                id: dataId
            }
        })
            .then(() => {
                res.redirect('/admins/produks')
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = ControllerAdmin