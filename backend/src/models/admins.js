const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  name: String,
  email: String,
  password: String,
  token: String,
  access: Number,
});

module.exports = mongoose.model("admins", adminSchema);
