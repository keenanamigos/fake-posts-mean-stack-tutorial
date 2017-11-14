const express = require("express");
const router = express.Router();

const axios = require("axios");
const API = "https://jsonplaceholder.typicode.com";

// GET API listing
router.get("/", (request, response) => {
    response.send("API works!");
});

// Get all posts
router.get("/posts", (request, response) => {
    // Get posts from the mock API. Ideally this should be replaced with a service that connects to MongoDB
    axios.get(`${API}/posts`)
        .then(posts => {
            response.status(200).json(posts.data);
        })
        .catch(error => {
            response.status(500).send(error);
        });
});

module.exports = router;