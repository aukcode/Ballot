import mongoose from 'mongoose';

const pollSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  pollPin: {
    type: Number,
    required: true,
    max: 999999,
    min: 100000,
  },
  title: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  questions: {
    type: Array,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Poll', pollSchema);
