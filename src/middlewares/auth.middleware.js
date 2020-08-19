const authMiddleware = function(req, res, next) {
    console.log("Checking Authentication");
    next();
}

module.exports = authMiddleware;