const express = require("express");
const router = express.Router();
const { ProjectController } = require('../../controllers');

router.get('/projects', ProjectController.getProject);
module.exports = router;
