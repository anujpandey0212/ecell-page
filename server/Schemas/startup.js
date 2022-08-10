const mongoose = require("mongoose");

const startupSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Sector: { type: String, required: true },
  Location: String,
  Representative_name: { type: String, required: true },
  Member_name: { type: String, required: true },
  Email_member: { type: String, required: true },
  Contact_number: { type: String, required: true },
  Phase: String,
  Description: String,
  Hiring_interest: { type: Boolean, required: true },
  Help_expected: String,
  Links: {
    Website: { type: String, required: true },
    Linkedin: String,
    Social_Media: [{ type: String }],
  },
  Hear_how: String,
});

module.exports = startupSchema;
