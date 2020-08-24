let staffs = [
    { id: 1, name: 'Staff 1', password: 'completed', email: 'staff1@yahoo.com'},
    { id: 2, name: 'Staff 2', password: 'completed', email: 'staff2@yahoo.com' },
    { id: 3, name: 'Staff 3', password: 'completed', email: 'staff3@yahoo.com' },
    { id: 4, name: 'Staff 4', password: 'completed', email: 'staff4@yahoo.com'},
    { id: 5, name: 'Staff 5', password: 'completed', email: 'staff5@yahoo.com'},
    { id: 6, name: 'Staff 6', password: 'completed', email: 'staff6@yahoo.com' }
  ];
const getAllStaffs = function (req, res) {
    
    res.send({
        pageIndex: 1,
        pageSize: 20,
        hasNext: true,
        hasPrevious: false,
        data: staffs
    });
};

// const addNewTasks = function(req, res) {
//     let customerObject = {
//         id: customers.length + 1,
//         ...req.body
//     };      
//     console.log(customerObject);
//     customers.push(customerObject);   
//     res.send({
//         message: "Customer Added"
//     });
// }

module.exports.getAllStaffs = getAllStaffs;
//module.exports.addNewCustomer = addNewCustomer;