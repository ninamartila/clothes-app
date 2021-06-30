const { User, Produk } = require('../models')

class ControllerUser {
    static getUser(req, res) {
        res.render('user')
    }

    static getKeranjang(req, res) {
        const dataId = req.params.id

        User.findByPk(dataId, {
            include: [
                { model: Produk }
            ]
        })
            .then(data => {
                res.render('keranjang', { data })
            })
            .catch(err => {
                res.semd(err)
            })
    }
}

module.exports = ControllerUser