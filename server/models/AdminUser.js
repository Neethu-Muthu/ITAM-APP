// models/AdminUser.js
const mongoose = require('mongoose');

const adminUserSchema = new mongoose.Schema({
  uId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
});

const AdminUser = mongoose.model('AdminUser', adminUserSchema);

module.exports = AdminUser;
