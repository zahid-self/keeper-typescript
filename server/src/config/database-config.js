const { Sequelize } = require('sequelize');
const { Project } = require('../model')

const sequelize = new Sequelize('keeper', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

let db = {}

db.Projects = require('../model/project.model')(sequelize, Sequelize)
db.Tasks = require('../model/task.model')(sequelize, Sequelize)

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = {
  db
}

