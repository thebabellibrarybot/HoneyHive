const express = require('express');
const router = express.Router();
const completion = require("../controller/completionController");

// create
router.post('/', completion.createCompletionController);

module.exports = router;