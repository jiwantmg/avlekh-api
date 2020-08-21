const jwtHelper = require('jsonwebtoken');
let users = [
    { id: 1, email: "jiwan@gmail.com", password: "123" },
    { id: 2, email: "mithun@gmail.com", password: "321" },
]
const login = function(req, res) {
    let requestData = req.body;
    console.log(requestData);
    let user = users.find(user => user.email == requestData.email && user.password == requestData.password);
    if(!user){
        res.send({message: "Username or password is invalid"})
        return;
    }
    
    res.send({
        token: generateJwtToken()
    })
}

function generateJwtToken(){
    return jwtHelper.sign({}, 'thisisaverysecretkey');
}
module.exports.login = login;