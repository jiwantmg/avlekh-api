const express = require('express');
const router = express.Router();

// import services
const service = require('../services/customer.service');

// customer api sections
router.get('/api/customers', service.getAllCustomers);
router.post('/api/customers', service.addNewCustomer);

module.exports = router;