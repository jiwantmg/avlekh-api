const jwt = require('jsonwebtoken');

  function decodeToken(token) {      
    return jwt.verify(token, "thisisaverysecretkey");    
  }
  
  // This express middleware attaches `userId` to the `req` object if a user is
  // authenticated. This middleware expects a JWT token to be stored in the
  // `Access-Token` header.
  const jwtAuthenticationMiddleware = (req, res, next) => {
    const token = req.header('Authorization');    
    if (!token) {
      return next();
    }
  
    let extractedToken = token.split(' ')[1];    
    try {
      console.log("Extracted token ",extractedToken);
      const decoded = decodeToken(extractedToken);    
      const { id } = decoded;  
      req.userId = id;
    } catch (e) {
      return next();
    }
  
    next();
  };
  
  // This middleware stops the request if a user is not authenticated.
  async function isAuthenticatedMiddleware(req, res, next) {
    if (req.userId) {
      return next();
    }
  
    res.status(401);
    res.json({ error: 'User not authenticated' });
  }

  module.exports = jwtAuthenticationMiddleware;