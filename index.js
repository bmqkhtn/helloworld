// Import the express module to create our web server
const express = require('express');
// Import the path module to work with file and directory paths
const path = require('path');

// Create an instance of the express application
const app = express();
// Define the port the server will listen on.
// It uses process.env.PORT for deployment environments or defaults to 3000 for local development.
const port = process.env.PORT || 3000;

app.use(express.static('public'));
// Define a route for the root URL ('/')
// When a GET request is made to '/', the callback function will be executed.
app.get('/', (req, res) => {
  // Use path.join to create an absolute path to the index.html file.
  // __dirname refers to the directory where the current script (app.js) is located.
  // 'public' is the folder containing our HTML file.
  // 'index.html' is the name of the HTML file we want to send.
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log('Open your web browser and navigate to this URL to see the HTML page.');
});
