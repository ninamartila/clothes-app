const { Admin, Customer, Order } = require('../models/index')

class ControllerUser {
    static signUpCustomer(req, res) {
        res.render('signUp')
    }
    static signUpCustomerPost(req, res) {
        const { firstName, lastName, email, alamat, username, password, phoneNumber } = req.body
        Customer.create({ firstName, lastName, email, phoneNumber, alamat, username, password })
            .then(() => {
                res.redirect('/users/login')
            })
            .catch(err => {
                res.send(err)
            })
    }
    static login(req, res) {
        res.render('login')
    }
    static loginPost(req, res) {
        const { username, password } = req.body
        Admin.findAll({ where: { id: 1 } })
            .then(data => {
                data = data[0]
                if (username === data.username && password === data.password) {
                    res.redirect('/admins/produks')
                } else {
                    return Customer.findAll({
                        where: {
                            username, password
                        }
                    })
                        .then((data) => {
                            const dataId = data[0].id
                            res.redirect(`/customers/produks/${dataId}`)
                        })
                }
            })
            .catch(err => {
                console.log(err, 2);
            })
    }
}


module.exports = ControllerUser