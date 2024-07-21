// routes/maintenance.js
const express = require('express');
const router = express.Router();
const Maintenance = require('../models/Maintenance');

// Get all maintenance requests
router.get('/', async (req, res) => {
    try {
        const requests = await Maintenance.find();
        res.json(requests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new maintenance request
router.post('/', async (req, res) => {
    const { assetId, issueDescription } = req.body;

    if (!assetId || !issueDescription) {
        return res.status(400).json({ message: 'Asset ID and issue description are required.' });
    }

    try {
        const newRequest = new Maintenance({ assetId, issueDescription });
        await newRequest.save();
        res.status(201).json(newRequest);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a maintenance request
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { scheduledDate, status } = req.body;

    try {
        const request = await Maintenance.findById(id);
        if (!request) return res.status(404).json({ message: 'Maintenance request not found.' });

        request.scheduledDate = scheduledDate || request.scheduledDate;
        request.status = status || request.status;

        await request.save();
        res.json(request);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a maintenance request
router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const request = await Maintenance.findById(id);
        if (!request) return res.status(404).json({ message: 'Maintenance request not found.' });

        await request.remove();
        res.json({ message: 'Maintenance request deleted.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
