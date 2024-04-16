const mongoose = require("mongoose");

const { Schema } = mongoose;
const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    age: {
      type: Number,
    },
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    passwordChangeAt: {
      type: Date,
    },
    resetPassword: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = mongoose.models.user || mongoose.model("user", userSchema);
