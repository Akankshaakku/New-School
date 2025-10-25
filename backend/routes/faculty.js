const express = require('express');
const router = express.Router();
const Faculty = require('../models/Faculty');

// Get all faculty
router.get('/', async (req, res) => {
  try {
    const { featured, limit } = req.query;
    let query = {};
    
    if (featured === 'true') {
      query.featured = true;
    }
    
    let faculty = Faculty.find(query).sort({ createdAt: -1 });
    
    if (limit) {
      faculty = faculty.limit(parseInt(limit));
    }
    
    const result = await faculty.exec();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single faculty member
router.get('/:id', async (req, res) => {
  try {
    const facultyMember = await Faculty.findById(req.params.id);
    if (!facultyMember) {
      return res.status(404).json({ message: 'Faculty member not found' });
    }
    res.json(facultyMember);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
