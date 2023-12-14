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

const updateProject = async (req, res) => {
  const { title, description, startDate, endDate } = req.body;
  const { userId, projectId } = req.params;
  try {
    const updatedData = await Projects.update({
      title: title,
      description: description,
      startDate: startDate,
      endDate: endDate
    }, {
      where: {
        [Op.and]: [
          {
            userId: {
              [Op.eq]: userId
            },
            id: {
              [Op.eq]: projectId
            }
          }
        ]
      }
    })
    return res.status(200).json({
      success: true,
      message: 'Project Data Updated',
      error: {},
      data: updatedData
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      error: true,
      data: {}
    });
  }

}

const deleteProject = async (req, res) => {
  const { userId, id } = req.params;

  try {
    const project = await Projects.findOne({
      where: { userId, id }
    });

    //check if project exists
    if (!project) {
      return res.status(404).json({ error: 'Record not found' });
    }

    //delete the project
    await project.destroy();
    return res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.log('Error deleting project', error)
    return res.status(500).json({ message: 'Internal server error' })
  }

};

module.exports = {
  getProject,
  createProject,
  updateProject,
  deleteProject
}