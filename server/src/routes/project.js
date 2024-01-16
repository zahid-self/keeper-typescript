const express = require("express");
const router = express.Router();
const { ProjectController } = require('../controllers');

router.get('/projects/:userId', ProjectController.getProject);
router.post('/projects/create', ProjectController.createProject);
router.put('/projects/update/:userId/:projectId', ProjectController.updateProject);
router.delete('/projects/delete/:userId/:id', ProjectController.deleteProject);
module.exports = router;
