const express = require('express');
const router = express.Router();
const userService = require('../services/users.service')

router.post('/api/staffs', userService.addNewStaff);
router.get('/api/staffs', userService.getAllStaffs);

module.exports = router;