const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const router = express.Router();

// router.post('/signup', async (req, res) => {
//   const { username, password, name, phone } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ username, password: hashedPassword, name, phone });
//     await user.save();
//     res.status(201).send('User created');
//   } catch (err) {
//     res.status(500).send('Error creating user');
//   }
// });

// POST /auth/signup
router.post('/signup', async (req, res) => {
  const { username, password, name, phone } = req.body;

  try {
    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    // Create a new user instance
    const newUser = new User({
      username,
      password,
      name,
      phone,
    });

    // Save the user to MongoDB
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: 'User signed up successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).send('Login successful');
    } else {
      res.status(400).send('Invalid credentials');
    }
  } catch (err) {
    res.status(500).send('Error logging in');
  }
});

module.exports = router;
