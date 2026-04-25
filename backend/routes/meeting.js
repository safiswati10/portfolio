const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Meeting = require('../models/Meeting');

// Generate a Google Meet link (using Google Meet URL format)
function generateMeetLink() {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  const part = (len) => Array.from({length: len}, () => chars[Math.floor(Math.random()*chars.length)]).join('');
  return `https://meet.google.com/${part(3)}-${part(4)}-${part(3)}`;
}

// Create meeting booking
router.post('/book', async (req, res) => {
  try {
    const { name, email, projectType, description, budget, preferredDate, preferredTime } = req.body;

    const meetLink = generateMeetLink();

    const meeting = new Meeting({
      name, email, projectType, description,
      budget, preferredDate, preferredTime, meetLink
    });

    await meeting.save();

    // Send confirmation email (optional - works if email configured)
    try {
      const transporter = nodemailer.createTransporter({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: '✅ Meeting Confirmed - Safi ur Rehman Portfolio',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #00d4ff;">Meeting Confirmed! 🎉</h2>
            <p>Hi <strong>${name}</strong>,</p>
            <p>Your meeting has been booked successfully!</p>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>Meeting Details:</h3>
              <p><strong>Project Type:</strong> ${projectType}</p>
              <p><strong>Date:</strong> ${preferredDate}</p>
              <p><strong>Time:</strong> ${preferredTime}</p>
              <p><strong>Google Meet Link:</strong> <a href="${meetLink}">${meetLink}</a></p>
            </div>
            <p>See you soon! - Safi ur Rehman</p>
          </div>
        `
      });
    } catch(emailErr) {
      console.log('Email not sent (configure .env):', emailErr.message);
    }

    res.status(201).json({
      success: true,
      message: 'Meeting booked successfully!',
      meetLink,
      meeting
    });

  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Get all meetings
router.get('/', async (req, res) => {
  try {
    const meetings = await Meeting.find().sort({ createdAt: -1 });
    res.json({ success: true, meetings });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
