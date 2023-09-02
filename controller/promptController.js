const fs = require('fs');
const path = require('path');
const handler = require('../funcs/handler');

// Define the path to your JSON file
const dataFilePath = path.join(__dirname, 'data.json'); 
// Define funcs
const createPrompt = handler.createPrompt;
// Create a new prompt object and save it to the JSON file


const createPromptControllers = async (req, res) => {

    try {

        const { name, promptTemplate, model, hyperparameters } = req.body;

        const prompt = await createPrompt(name, promptTemplate, model, hyperparameters);

        // Add the new data to the existing data
        let existingData = [];
        if (fs.existsSync(dataFilePath)) {
            const rawData = fs.readFileSync(dataFilePath);
            existingData = JSON.parse(rawData);
        }
        const newData = {
            [name]: prompt
        };
        existingData.push(newData);
        fs.writeFileSync(dataFilePath, JSON.stringify(existingData, null, 2));

        // Return a success message
        res.status(200).json({ message: 'success' });
        
    } catch (error) {
        throw error;
    }

};

module.exports = {
    createPromptControllers
};