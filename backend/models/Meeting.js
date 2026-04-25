const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  projectType: { type: String, required: true },
  description: { type: String, required: true },
  budget: { type: String },
  preferredDate: { type: String, required: true },
  preferredTime: { type: String, required: true },
  meetLink: { type: String },
  status: { type: String, default: 'pending', enum: ['pending', 'confirmed', 'cancelled'] },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Meeting', meetingSchema);
