let customers = [
    { id: 1, name: "Jiwan", email: 'jiwan@gmail.com', phoneNO: '1111111', address: "Nepal" },
    { id: 2, name: "Mithun", email: 'mithun@gmail.com', phoneNO: '222222', address: "Nepal" },
    { id: 3, name: "Mohan", email: 'mohan@gmail.com', phoneNO: '333333333', address: "Nepal" },
    { id: 4, name: "Min", email: 'min@gmail.com', phoneNO: '444444', address: "Nepal" },
    { id: 5, name: "Dil", email: 'di@gmail.com', phoneNO: '555555', address: "Nepal" },
    { id: 6, name: "Arpana", email: 'arpana@gmail.com', phoneNO: '666666', address: "Nepal" },
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