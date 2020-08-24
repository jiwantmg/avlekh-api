let mytasks = [
    { id: 1, title: 'Tasks Title', status: 'completed', description: 'Task description', deadline: '2020-5-6', track_no: '8765432', created_at: '2020-5-1', status: 1 },
    { id: 2, title: 'Tasks Title', status: 'completed', description: 'Task description', deadline: '2020-5-6', track_no: '8765432', created_at: '2020-5-1', status: 0 },
    { id: 3, title: 'Tasks Title', status: 'completed', description: 'Task description', deadline: '2020-5-6', track_no: '8765432', created_at: '2020-5-1', status: 1 },
    { id: 4, title: 'Tasks Title', status: 'completed', description: 'Task description', deadline: '2020-5-6', track_no: '8765432', created_at: '2020-5-1', status: 1 },
    { id: 5, title: 'Tasks Title', status: 'completed', description: 'Task description', deadline: '2020-5-6', track_no: '8765432', created_at: '2020-5-1', status: 1 },
    { id: 6, title: 'Tasks Title', status: 'completed', description: 'Task description', deadline: '2020-5-6', track_no: '8765432', created_at: '2020-5-1', status: 0 },
    { id: 7, title: 'Tasks Title', status: 'completed', description: 'Task description', deadline: '2020-5-6', track_no: '8765432', created_at: '2020-5-1', status: 1 },
    { id: 8, title: 'Tasks Title', status: 'completed', description: 'Task description', deadline: '2020-5-6', track_no: '8765432', created_at: '2020-5-1', status: 0 },
    { id: 9, title: 'Tasks Title', status: 'completed', description: 'Task description', deadline: '2020-5-6', track_no: '8765432', created_at: '2020-5-1', status: 1 },
    { id: 10, title: 'Tasks Title', status: 'completed', description: 'Task description', deadline: '2020-5-6', track_no: '8765432', created_at: '2020-5-1', status: 0 },
    { id: 11, title: 'Tasks Title', status: 'completed', description: 'Task description', deadline: '2020-5-6', track_no: '8765432', created_at: '2020-5-1', status: 1 },
    { id: 12, title: 'Tasks Title', status: 'completed', description: 'Task description', deadline: '2020-5-6', track_no: '8765432', created_at: '2020-5-1', status: 0 },
    { id: 13, title: 'Tasks Title', status: 'completed', description: 'Task description', deadline: '2020-5-6', track_no: '8765432', created_at: '2020-5-1', status: 1 } 
  ];
const getAllMyTasks = function (req, res) {
    
    res.send({
        pageIndex: 1,
        pageSize: 20,
        hasNext: true,
        hasPrevious: false,
        data: mytasks
    });
};

const getAllTasks = function (req, res) {
    
    res.send({
        pageIndex: 1,
        pageSize: 20,
        hasNext: true,
        hasPrevious: false,
        data: mytasks
    });
};

const registerTask = function(req, res) {
    let taskObject = {
        id: mytasks.length + 1,
        ...req.body
    };         
    mytasks.push(taskObject);   
    res.send({
        message: "Tasks Register"
    });
}

module.exports.getAllMyTasks = getAllMyTasks;
module.exports.registerTask = registerTask;
module.exports.getAllTasks = getAllTasks;