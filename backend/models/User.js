
const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
  domain: String,
  score: Number,
  total: Number,
  level: String,
  passed: Boolean,
  date: { type: Date, default: Date.now }
});

const CertificateSchema = new mongoose.Schema({
  title: String,
  domain: String,
  score: Number,
  date: { type: Date, default: Date.now },
  url: String // certificate download link / html page reference
});

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String, default: '' },
    scores: [ScoreSchema],
    certificates: [CertificateSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
