const tf = require("@tensorflow/tfjs-node");
const fs = require("fs").promises;
const path = require("path");

async function loadModel(inputPath) {
  try {
    const model = await tf.loadLayersModel(`file://${inputPath}`);
    console.log("Model loaded successfully");
    return model;
  } catch (error) {
    console.error("Error loading model:", error.message);
    return null;
  }
}

const inputPath = path.resolve(__dirname, "../models/model.json");

const loadedModel = loadModel(inputPath);
if (loadedModel) {
  // Use the loaded model for inference or other tasks
  // Example: const result = loadedModel.predict(tf.tensor2d([[1, 2, 3, 4]], [1, 4]));
  //   console.log(result.dataSync());
}
