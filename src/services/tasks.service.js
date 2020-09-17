const db = require('../models');
const task = require('../models/task');

let mytasks = [];
const getAllMyTasks = function (req, res) {

    res.send({
        pageIndex: 1,
        pageSize: 20,
        hasNext: true,
        hasPrevious: false,
        data: mytasks
    });
};

const getAllTasks = async function (req, res) {
    let tasks = await db.Task.findAll(
        {
            include: [
                {
                    model: db.Customer
                },
                {
                    model: db.User
                }
            ]
        }
    );
    res.send({
        pageIndex: 1,
        pageSize: 20,
        hasNext: true,
        hasPrevious: false,
        data: tasks
    });
};

const registerTask = async function (req, res) {
    try {
        let taskObject = {            
            ...req.body
        };

        await db.Task.create(taskObject);
        res.send({ message: "New task created created" });
    } catch (e) {
        throw new Error(e);        
    }
}

module.exports.getAllMyTasks = getAllMyTasks;
module.exports.registerTask = registerTask;
module.exports.getAllTasks = getAllTasks;