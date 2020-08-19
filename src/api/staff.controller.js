const express = require('express');
const router = express.Router();

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

module.exports = router;