// models/Maintenance.js
const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema({
    assetId: { type: String, required: true },
    issueDescription: { type: String, required: true },
    scheduledDate: { type: Date, default: null },
    status: { type: String, default: 'Pending' },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Maintenance', maintenanceSchema);
