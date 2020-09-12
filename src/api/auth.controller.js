const express = require('express');
const router = express.Router();
// import services
const service = require('../services/auth.service');

router.post('/api/auth/login', service.login);
router.post('/api/auth/register', service.register);

module.exports = router;