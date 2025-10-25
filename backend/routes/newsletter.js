const express = require('express');
const router = express.Router();
const Newsletter = require('../models/Newsletter');

// Subscribe to newsletter
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
    
    // Check if email already exists
    const existingSubscription = await Newsletter.findOne({ email });
    if (existingSubscription) {
      return res.status(400).json({ message: 'Email already subscribed' });
    }
    
    const newsletter = new Newsletter({ email });
    await newsletter.save();
    
    res.status(201).json({ 
      message: 'Successfully subscribed to newsletter!',
      email 
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Unsubscribe from newsletter
router.post('/unsubscribe', async (req, res) => {
  try {
    const { email } = req.body;
    
    const newsletter = await Newsletter.findOneAndUpdate(
      { email },
      { subscribed: false },
      { new: true }
    );
    
    if (!newsletter) {
      return res.status(404).json({ message: 'Email not found' });
    }
    
    res.json({ message: 'Successfully unsubscribed from newsletter' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
