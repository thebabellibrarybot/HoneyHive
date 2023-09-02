const express = require('express');
const router = express.Router();
const prompt = require("../controller/promptController");

// create
router.post('/', prompt.createPromptControllers);

module.exports = router;