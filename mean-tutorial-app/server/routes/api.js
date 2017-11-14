const express = require("express");
const router = express.Router();

// GET API listing
router.get("/", (request, response) => {
    response.send("API works!");
});

module.exports = router;