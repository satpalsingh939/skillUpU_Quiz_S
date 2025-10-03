
// const express = require('express');
// const router = express.Router();
// const fs = require('fs');
// const path = require('path');
// const auth = require('./authMiddleware');

// router.get('/', auth, (req, res) => {
//   try {
//     const domain = (req.query.domain || 'javascript').toLowerCase();
//     const filePath = path.join(__dirname, '..', 'data', 'domains', `${domain}.json`);

//     if (!fs.existsSync(filePath)) return res.status(404).json({ msg: 'Domain not found' });

//     const questions = JSON.parse(fs.readFileSync(filePath, 'utf8'));
//     res.json(questions);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ msg: 'Server error' });
//   }
// });

// module.exports = router;



const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

// Get questions by domain
router.get("/", async (req, res) => {
  try {
    const domain = (req.query.domain || "").toLowerCase();
    if (!domain) return res.status(400).json({ msg: "Domain required" });

    const questions = await Question.find({ domain });
    if (!questions.length) return res.status(404).json({ msg: "No questions found" });

    res.json(questions);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

router.get("/domains", async (req, res) => {
  try {
    const domains = await Question.distinct("domain");
    res.json(domains);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
