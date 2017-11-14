// Get dependencies
const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");

// Get API routes
const api = require("./server/routes/api");
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, "dist")));

// Set our API routes
app.use("/api", api);

// Get port from environment and store in Express
const port = process.env.port || "3000";
app.set("port", port);

// Create HTTP server
const server = http.createClient(app);

// Listen on provided port, on all network interfaces
server.listen(port, () => 
    console.log(`API running on localhost:${port}`)
);