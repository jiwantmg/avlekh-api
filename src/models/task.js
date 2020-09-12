  'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.Customer, {
        foreignKey: "customerId",
        onDelete: "CASCADE"
      });
      Task.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE"
      });
    }
  };
  Task.init({
    task: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    registered_on: DataTypes.DATE,
    deadline: DataTypes.DATE,
    possible_solution: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task',
  });

  return Task;
};