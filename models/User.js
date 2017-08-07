const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: { type: String, default: '' },
  credits: { type: Number, default: 0 },
  username: { type: String, default: '' }
});

mongoose.model('users', userSchema);
