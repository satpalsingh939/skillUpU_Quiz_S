const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: [{ type: String }],
  answer: { type: String, required: true },
  // answerIndex: { type: Number, required: true },
  level: { type: String, default: "easy" },
  domain: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Question", QuestionSchema);

