// src/models/user.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String },
  phone: { type: String },
  dob: { type: Date },
  address: { type: String },
  bloodGroup: { type: String },
  profilePhoto: { type: String } // URL 
});

// Method to update user details OF USER 
userSchema.statics.updateUser = async function(id, updates) {
  try {
    const user = await this.findByIdAndUpdate(id, updates, { new: true });
    return user;
  } catch (error) {
    throw new Error('Error updating user');
  }
};

module.exports = mongoose.model('User', userSchema);
