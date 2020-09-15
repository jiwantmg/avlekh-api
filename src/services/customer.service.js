const db = require('../models');

const getAllCustomers = async function (req, res) {

    let customers = await db.Customer.findAll();

    res.send({
        pageIndex: 1,
        pageSize: 20,
        hasNext: true,
        hasPrevious: false,
        data: customers
    });
};

const addNewCustomer = async function (req, res) {
    try {
        console.log("Customer Detail ",req.body);        
        let customerObject = {            
            ...req.body
        };
    
        customerObject.username = req.body.user.username;
        customerObject.password = req.body.user.password;

        await db.Customer.create(customerObject);
        res.send({
            message: "Customer Added"
        });
    }catch(e) {
        console.log(e);
        throw new Error("Can not add customer");
    }
}

module.exports.getAllCustomers = getAllCustomers;
module.exports.addNewCustomer = addNewCustomer;