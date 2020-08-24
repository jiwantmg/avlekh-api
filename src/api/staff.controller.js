const express = require('express');
const router = express.Router();
const staffService = require('../services/staffs.service');

router.get('/api/staffs/absentsummary', function (req, res) {
    let summary = {
        title: 'Absent Staff',
        datas: [
            { id: 1, title: 'Total Absent Today', value: '3' },
            { id: 2, title: 'Total Staff', value: '20' },
            { id: 3, title: 'Total Total Present', value: '17' }
        ]
    };
    res.send(summary);
});

router.get('/api/staffs', staffService.getAllStaffs);

module.exports = router;