const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: { type: String, default: '' }
});

mongoose.model('users', userSchema);
