const jwtHelper = require('jsonwebtoken');
const db = require('../models');

let users = [
    { id: 1, email: "jiwan@gmail.com", password: "123" },
    { id: 2, email: "mithun@gmail.com", password: "321" },
]
const login = async function(req, res) {
    let requestData = req.body;
    console.log(requestData);
    let user = await db.User.findOne({
        where: {
            email: requestData.email,
            password: requestData.password
        }
    }); 
    if(!user){
        res.send({message: "Username or password is invalid"})
        return;
    }
    
    res.send({
        token: generateJwtToken()
    })
}


const register = function(req, res) {
    let requestData = req.body;    
    db.User.create({
        fullName: requestData.fullName,
        email: requestData.email,
        phone: requestData.phone,
        specialization: requestData.specialization,
        username: requestData.username,
        password: requestData.password
    });

    res.send({message: "New User is created"});

}

function generateJwtToken(){
    return jwtHelper.sign({}, 'thisisaverysecretkey');
}
module.exports.login = login;
module.exports.register = register;