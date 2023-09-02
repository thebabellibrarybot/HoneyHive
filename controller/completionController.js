const fs = require('fs');
const path = require('path');
const handler = require('../funcs/handler');

// Define funcs
const createCompletion = handler.createCompletion;

// Create a new completion item
const createCompletionController = async (req, res) => {

    const { name, variable } = req.body;

    console.log()

    try {

        const newCompletion = await createCompletion(name, variable);
        console.log(newCompletion);
        res.status(200).json(newCompletion);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

};

module.exports = {
    createCompletionController
};

