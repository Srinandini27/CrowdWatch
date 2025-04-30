const express = require('express');
const router = express.Router();
const twilio = require('./twilioService');
const Report = require('./db');

router.post('/report', async (req, res) => {
  const report = new Report(req.body);
  await report.save();
  twilio.sendSMS(`New alert: ${report.type} at ${report.location}`);
  res.sendStatus(200);
});

router.get('/reports', async (req, res) => {
  const reports = await Report.find();
  res.json(reports);
});

module.exports = router;