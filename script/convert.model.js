const tf = require("@tensorflow/tfjs-node");
const fs = require("fs");
const path = require("path");

async function saveModel(model, outputPath) {
  try {
    // Save the model in HDF5 format
    await model.save(`file://${outputPath}`);
    console.log(`Model saved to ${outputPath}`);
  } catch (error) {
    console.error("Error saving model:", error.message);
  }
}

// Example: create a simple sequential model
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

// Replace 'path/to/save/model.h5' with the desired output path
const outputPath = path.resolve(__dirname, "../models/model.h5");

saveModel(model, outputPath);
