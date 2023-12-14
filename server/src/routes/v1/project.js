const express = require("express");
const router = express.Router();
const { ProjectController } = require('../../controllers');

router.get('/projects/:userId', ProjectController.getProject);
router.post('/projects/create', ProjectController.createProject);
module.exports = router;
