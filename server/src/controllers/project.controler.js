const status = require('http-status');
const { DatabaseConnection } = require('../config');
const { Op } = require('sequelize')
const Projects = DatabaseConnection.db.Projects;

const getProject = async (req, res) => {
  const { userId } = req.params;
  const projects = await Projects.findAll({
    where: {
      userId: {
        [Op.eq]: userId
      }
    }
  });
  if (!projects) {
    return res.status(404).json({
      success: true,
      message: 'Project not found',
      error: true,
      data: {}
    });
  }
  return res.status(status.OK).json({
    success: true,
    message: 'Project found',
    error: false,
    data: projects
  });
};

const createProject = async (req, res) => {
  const { userId, title, description, startDate, endDate } = req.body;
  await Projects.create({
    userId: userId,
    title: title,
    description: description,
    startDate: startDate,
    endDate: endDate
  })
    .then((data) => {
      return res.status(200).json({
        success: true,
        message: '',
        error: {},
        data: req.body
      });
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        message: err.message,
        error: true,
        data: {}
      });
    })
}

module.exports = {
  getProject,
  createProject
}