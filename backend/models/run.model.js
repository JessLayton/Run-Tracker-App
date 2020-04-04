const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const runSchema = new Schema({
  distance: { type: Number, required: true, min: 0.5, max: 100 },
  time: { type: Number, required: true, min: 0, max: 1200 },
  speed: { type: Number },
  location: { type: String, required: true, maxlength: 100 },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Run = mongoose.model('Run', runSchema);

module.exports = Run;