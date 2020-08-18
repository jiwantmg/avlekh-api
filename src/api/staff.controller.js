const express = require('express');
const router = express.Router();

router.get('/api/staffs', function(req, res){
    res.send({message: "Welcome to staff section"});
});

module.exports = router;