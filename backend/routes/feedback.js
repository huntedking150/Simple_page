const express = require('express');
const Feedback = require('../models/Feedback');
const feedbackRouter = express.Router();

feedbackRouter.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;

  const feedback = new Feedback({
    name,
    email,
    phone,
    message,
  });

  try {
    await feedback.save();
    res.status(201).send('Feedback received');
  } catch (err) {
    res.status(400).send('Error saving feedback');
  }
});

module.exports = feedbackRouter;
