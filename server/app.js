/**
 * This module sets up an Express server that exposes an endpoint to fetch and process
 * files using the FileService. It also includes CORS middleware.
 */
const express = require('express');

const FileService = require('./src/application/services/fileService');
const cors = require('cors');

// Initialize the Express app and FileService
const app = express();
const fileService = new FileService();

// Set the default port to use if no environment variable is provided
const port = process.env.PORT || 3000;

// Apply the CORS middleware
app.use(cors());

// Define the '/files/data' GET endpoint to fetch and process files using FileService
app.get('/files/data', async (req, res) => {
  try {
    const data = await fileService.fetchAndProcessFiles();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server, listening on the specified port
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
