const twilio = require('twilio');
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH);

exports.sendSMS = (message) => {
  client.messages.create({
    body: message,
    from: process.env.TWILIO_NUMBER,
    to: process.env.MY_PHONE
  });
};