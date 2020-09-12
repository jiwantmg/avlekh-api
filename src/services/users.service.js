const db = require('../models');

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