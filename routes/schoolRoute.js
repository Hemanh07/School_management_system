const express = require("express");
const { validatePost, validateGet } = require("../middleware/validation");
const router = express.Router();
const { fetchSchools, addSchool } = require("../controllers/schoolController");

router.get("/listSchools", validateGet, fetchSchools);

router.post("/addSchool", validatePost, addSchool);

module.exports = { router };
