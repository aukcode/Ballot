import mongoose from 'mongoose';

const blacklistedTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('BlacklistedToken', blacklistedTokenSchema);
