const express = require('express');
const router = express.Router();

// import services
const service = require('../services/users.service');

// customer api sections
router.get('/api/users', service.getAllUsers);

module.exports = router;