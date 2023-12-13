const status = require('http-status');

const getProject = (req, res) => {
  return res.status(status.OK).json({
    success: true,
    message: 'Get All Project',
    error: {},
    data: {}
  });
};

module.exports = {
  getProject
}