const appLoging = function(req, res, next) {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
}

module.exports = appLoging;