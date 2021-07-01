const {Admin, Customer, OrderItem} = require('../models/index')

class ControllerUser{
    static signUpCustomer(req, res){
        res.render('signUp')
    }
    static signUpCustomerPost(req, res){
        const {firstName, lastName, email, alamat, username, password, phoneNumber} = req.body
        Customer.create({firstName, lastName, email, phoneNumber, alamat, username, password})
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
    static loginPost(req, res){
        const {email, password} = req.body
        Admin.findAll({where: {id: 1}})
        .then(data=> {
            data = data[0]
            if(email === data.email && password === data.password){
                res.redirect('/admins')
            } else{
                return Customer.findAll({where: {email, password}})
            }
        })
        .then(() => {
            const totalBarang = 0
            const totalHarga = 0
            const ProdukId = 0
            const OrderId = 0
            const status = "false"
            return OrderItem.create({totalBarang: totalBarang, totalHarga: totalHarga, ProdukId: ProdukId, OrderId: OrderId, status:status})
        })
        .then(() => {
            res.redirect('/customers/produks')
        })
        .catch(err => {
            console.log(err, 2);
        })
    }
}


module.exports = ControllerUser