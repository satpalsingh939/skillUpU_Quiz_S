const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../models/User');
const JWT_SECRET = process.env.JWT_SECRET;

// const { Resend } = require("resend");

// const resend = new Resend(process.env.RESEND_API_KEY);


const otpStore = {};

router.post("/send-otp", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ msg: "Email is required" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = Date.now() + 5 * 60 * 1000; 

    otpStore[email] = { otp, expires };

    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });
    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // App Password
  },
  tls: {
    rejectUnauthorized: false, // optional, in case SSL issues
  },
});

    await transporter.sendMail({
      from: `"SkillUpU" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "SkillUpU - OTP Verification",
      text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
    });

    res.json({ msg: "OTP sent successfully to your email" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Failed to send OTP" });
  }

  //  try {
  //   const { email } = req.body;
  //   if (!email) return res.status(400).json({ msg: "Email is required" });

  //   // Generate OTP
  //   const otp = Math.floor(100000 + Math.random() * 900000).toString();
  //   const expires = Date.now() + 5 * 60 * 1000; // 5 min expiry
  //   otpStore[email] = { otp, expires };

  //   // Send OTP via Resend API
  //   await resend.emails.send({
  //      from: `"SkillUpU" <${process.env.EMAIL_USER}>`,
  //      // from: "satpalsinghjadhav5@gmail.com",
  //     // to: email,
  //     to: "satpalsinghjadhav5@gmail.com",
  //     subject: "SkillUpU - OTP Verification",
  //     text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
  //   });

  //   return res.json({ msg: "OTP sent successfully to your email" });
  // } catch (err) {
  //   console.error("Send OTP Error:", err);
  //   return res.status(500).json({ msg: "Failed to send OTP", error: err.message });
  // }
});

// Register
// router.post('/register', async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     if (!name || !email || !password) return res.status(400).json({ msg: 'Provide all fields' });
//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ msg: 'User exists' });
//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(password, salt);
//     user = new User({ name, email, password: hash });
//     await user.save();
//     const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });
//     res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
//   } catch (err) { console.error(err); res.status(500).json({ msg: 'Server error' }); }
// });

router.post("/register-otp", async (req, res) => {
  try {
    const { name, email, password, otp } = req.body;

    if (!name || !email || !password || !otp)
      return res.status(400).json({ msg: "All fields are required" });

    const record = otpStore[email];
    if (!record) return res.status(400).json({ msg: "OTP not sent" });
    if (record.expires < Date.now())
      return res.status(400).json({ msg: "OTP expired" });
    if (record.otp !== otp)
      return res.status(400).json({ msg: "Invalid OTP" });

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    user = new User({ name, email, password: hash });
    await user.save();

    delete otpStore[email]; 

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "7d" });

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});




// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ msg: 'Provide all fields' });
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ msg: 'Invalid credentials' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ msg: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id },
      JWT_SECRET, { expiresIn: '7d' });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) { console.error(err); res.status(500).json({ msg: 'Server error' }); }
});


// In-memory store for demo (production me DB preferred)
const resetStore = {};

// Step 1: Check email exist
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ msg: "Email is required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Email not found" });

    // For now, we just mark email in resetStore
    resetStore[email] = true;

    res.json({ msg: "Enter new password" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

// Step 2: Reset password
router.post("/reset-password", async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    if (!email || !newPassword)
      return res.status(400).json({ msg: "Email and new password required" });

    if (!resetStore[email])
      return res.status(400).json({ msg: "Please check email first" });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save();

    delete resetStore[email];

    res.json({ msg: "Password updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
