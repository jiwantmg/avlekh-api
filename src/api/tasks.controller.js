const express = require('express');
const router = express.Router();
const tasksService = require('../services/tasks.service');
const { taskService } = require('../services');

router.get('/api/mytasks', tasksService.getAllMyTasks);
router.post('/api/tasks', tasksService.registerTask);
router.get('/api/tasks', taskService.getAllTasks);

module.exports = router;