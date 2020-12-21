const db = require('../models');

const addNewStaff = async function (req, res) {
    try {
        let staff = req.body;
        staff.role = "staff";
        await db.User.create(staff);
        res.send({ messag: "Staff created successfully"});
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }

};

const getAllStaffs = async function (req, res) {

    let staffs = await db.User.findAll({
        attributes: {
            exclude: ['password']
        },
        where: {
            
        }
    });

    res.send({
        pageIndex: 1,
        pageSize: 20,
        hasNext: true,
        hasPrevious: false,
        data: staffs
    });
};


const getAllUsers = async function (req, res) {

    let users = await db.User.findAll({
        attributes: {
            exclude: ['password']
        }
    });

    res.send({
        pageIndex: 1,
        pageSize: 20,
        hasNext: true,
        hasPrevious: false,
        data: users
    });
};

module.exports.getAllUsers = getAllUsers;
module.exports.getAllStaffs = getAllStaffs;
module.exports.addNewStaff = addNewStaff;