const mongoose = require("mongoose");

const vcSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Contact_Number: { type: Number, required: true },
  Email: { type: String, required: true },
  Purpose: [{ type: String }],
  Interest: {
    Domain: [{ type: String }],
    Stage: [{ type: String }],
  },
  Expertise: String,
  Strategic_Partnership: String,
  Meta: String,
  Links: {
    Website: String,
    Linkedin: String,
    Social_Media: [{ type: String }],
  },
});

module.exports = vcSchema;
