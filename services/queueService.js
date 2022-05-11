const bullService = require('../services/bullService.js');
const mailService = require("../services/mailService");

exports.addMailToQueue = async function(email, html, subject) {
  const bull = bullService.getBull();
  try {
    const job = await bull.add({
      email: email,
      html: html,
      subject: subject
    });

    bull.process(async (job) => {
      mailService.sendMail(job.data.email, job.data.html, job.data.subject);
    });
    return true;
  } catch {
    return false;
  }
};
