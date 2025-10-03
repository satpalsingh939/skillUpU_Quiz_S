
const express = require('express');
const router = express.Router();
const auth = require('./authMiddleware');
const User = require('../models/User');

// GET profile
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// POST save score
router.post('/score', auth, async (req, res) => {
  try {
    const { domain, score, total, level, passed } = req.body;
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: 'User not found' });

    user.scores.push({ domain, score, total, level, passed });

    // agar pass kiya to certificate bhi add kar de
    if (passed) {
      const cert = {
        title: `Certificate of Completion - ${domain}`,
        domain,
        score,
        url: `/certificate.html?name=${encodeURIComponent(
          user.name
        )}&domain=${encodeURIComponent(domain)}&score=${score}`
      };
      user.certificates.push(cert);
    }

    await user.save();
    res.json({
      msg: 'Score saved',
      scoreEntry: user.scores[user.scores.length - 1],
      newCertificate: passed ? user.certificates[user.certificates.length - 1] : null
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
