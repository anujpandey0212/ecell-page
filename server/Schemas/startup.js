const mongoose = require("mongoose");

const startupSchema = new mongoose.Schema({
  Name: { type: String },
  Sector: { type: String, required: false },
  Location: String,
  Representative_name: { type: String, required: true },
  // Member_name: { type: String, required: true },
  Email_member: { type: String, required: true },
  Contact_number: { type: String, required: false },
  Phase: { type: String, required: true },
  Description: String,
  Hiring_interest: String,
  Help_expected: { type: String, requiured: true },
  Links: String,
  Hear_how: String,
});

module.exports = startupSchema;
