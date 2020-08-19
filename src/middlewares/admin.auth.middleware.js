const authAdminMiddleware = function(req, res, next) {
    console.log("Checking For Admin", req.params);    
    let isAdmin = req.query.isAdmin;
    if(isAdmin)
        next();
    else
        res.send("Admin protected area");
}

module.exports = authAdminMiddleware;