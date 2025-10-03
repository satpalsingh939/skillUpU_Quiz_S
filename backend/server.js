const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
const authRoutes = require('./routes/auth');
const questionRoutes = require('./routes/questions');
const userRoutes = require('./routes/user');
const Contact = require('./models/Contact');

const seedQuestions = require("./seedQuestions");

app.use('/api/auth', authRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/user', userRoutes);
// app.get('/api/learning', (req, res) => { const fs = require('fs'); const f = path.join(__dirname, 'data', 'learning', 'learning.json'); res.json(JSON.parse(fs.readFileSync(f, 'utf8'))); });

app.get("/", (req, res) => {
  res.send("Welcome to SkillUpU page...");
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message)
      return res.status(400).json({ error: "All fields are required" });

    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    res.json({ success: true, message: "Message saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB connected");
    await seedQuestions();
    app.listen(PORT, () => console.log("🚀 Server running on port", PORT));
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });

