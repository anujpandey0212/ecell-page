const mongoose = require("mongoose");

const vcSchema = new mongoose.Schema({
  Name: { type: String },
  Contact_Number: { type: Number },
  Email: { type: String, required: true },
  Purpose: [{ type: String, required: true }],
  Interest: {
    Domain: [{ type: String, required: true }],
    Stage: [{ type: String, required: true }],
  },
  Expertise: String,
  Strategic_Partnership: String,
  Meta: String,
  Links: String,
});

module.exports = vcSchema;
