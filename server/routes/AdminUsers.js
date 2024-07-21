// routes/adminUsers.js
const express = require('express');
const router = express.Router();
const AdminUser = require('../models/AdminUser');

// Create a new user
router.post('/', async (req, res) => {
  try {
    const { uId, name, role, email, password } = req.body;
    const newUser = new AdminUser({ uId, name, role, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await AdminUser.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update a user
router.put('/:uId', async (req, res) => {
  try {
    const { uId } = req.params;
    const updatedUser = await AdminUser.findOneAndUpdate({ uId }, req.body, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a user
router.delete('/:uId', async (req, res) => {
  try {
    const { uId } = req.params;
    await AdminUser.findOneAndDelete({ uId });
    res.status(200).json({ message: 'User deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
