const express = require('express');
const router = express.Router();
const projectRoutes = require('./project');

router.use('/v1', projectRoutes);
module.exports = router;
