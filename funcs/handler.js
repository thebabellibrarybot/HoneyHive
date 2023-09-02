const fs = require('fs');
const dataPath = "../controller/data.json";

const coherePayload = `
{
  "model": "cohere",
  "payload": {
    "model": "cohere",
    "method": "POST",
    "url": "https://api.cohere.ai/v1/generate",
    "headers": {
      "accept": "application/json",
      "content-type": "application/json"
    },
    "data": {
      "max_tokens": 20,
      "truncate": "END",
      "return_likelihoods": "NONE",
      "prompt": "{{prompt}}"
    }
  }
}
`;

const vicunaPayload = `
{
  "model": "vicuna",
  "payload": {
    "input": {
      "prompt": "{{prompt}}"
    }
  }
}
`;

const gpt3Payload = `
{
  "model": "gpt-3",
  "payload": {
    "messages": [
      { "role": "system", "content": "You are a helpful assistant." },
      { "role": "user", "content": "{{prompt}}" }
    ],
    "model": "gpt-3.5-turbo"
  }
}
`;

function createPrompt(name, promptTemplate, model, hyperparameters) {

    try {
        let prompt;

        // Step 1: Insert variable into prompt
        if (promptTemplate === "product_name") {
        prompt = "Your product name"; // Replace with your product name
        } else {
        // Handle other prompt templates here
        }

        let promptForServer;

        // Step 2: Insert variable into promptForServer based on the selected model
        if (model === "vicuna") {
        promptForServer = vicunaPayload.replace("{{prompt}}", prompt);
        } else if (model === "gpt-3") {
        promptForServer = gpt3Payload.replace("{{prompt}}", prompt);
        } else if (model === "cohere") {
        promptForServer = coherePayload.replace("{{prompt}}", prompt);
        }

        return promptForServer;

  } catch (error) {
    console.error(error);
    return "failure to covert string";
  }
}

function createCompletion(name, variable) {

    console.log(dataPath, 'dataPath')

    try {
        const rawData = fs.readFileSync("../controller/data.json", "utf8");
        console.log(rawData);
        // Parse the JSON data into a JavaScript object
        //const jsonData = JSON.parse(rawData);
        // Get the prompt object from the JSON data
        //const prompt = jsonData.find((prompt) => prompt.name === name);
        
        
    } catch (error) {
        console.error(error);
        return 'failure';
    }
}


module.exports = {
    createPrompt,
    createCompletion
};