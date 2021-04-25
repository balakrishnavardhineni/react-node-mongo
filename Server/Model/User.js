const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true },
    status: { type: String, required: true },
    created_at: { type: Date, required: false },
    updated_at: { type: Date, required: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", User);
