let customers = [
    { id: 1, name: "Jiwan", address: "Nepal" },
    { id: 2, name: "Jiwan", address: "Nepal" },
    { id: 3, name: "Jiwan", address: "Nepal" },
    { id: 4, name: "Jiwan", address: "Nepal" }
]; 
const getAllCustomers = function (req, res) {
    
    res.send({
        pageIndex: 1,
        pageSize: 20,
        hasNext: true,
        hasPrevious: false,
        data: customers
    });
};

const addNewCustomer = function(req, res) {
    let customerObject = {
        id: customers.length + 1,
        ...req.body
    };      
    console.log(customerObject);
    customers.push(customerObject);   
    res.send({
        message: "Customer Added"
    });
}

module.exports.getAllCustomers = getAllCustomers;
module.exports.addNewCustomer = addNewCustomer;