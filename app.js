// libs
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
// routes
const promptRoutes = require('./router/promptRoutes');
const completionRoutes = require('./router/completionRoutes');

// app and middleware
const app = express();
app.use(bodyParser.json());

// Endpoint for creating prompts
app.use('/create_prompt', promptRoutes);
// Endpoint for generating completions based on existing prompts
app.use('/create_completion', completionRoutes);


// running on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});