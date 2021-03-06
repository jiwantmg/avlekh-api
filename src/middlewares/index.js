const loggingMiddleware = require('./logging.middware');
const authMiddleware = require('./auth.middleware');
const authAdminMiddleware = require('./admin.auth.middleware');
const jwtAuthMiddleware = require('./jwt-auth.middleware');

module.exports.logginMiddleware = loggingMiddleware;
module.exports.authMiddleware = authMiddleware;
module.exports.authAdminMiddleware = authAdminMiddleware;
module.exports.jwtAuthMiddleware = jwtAuthMiddleware;