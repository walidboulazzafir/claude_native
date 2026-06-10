const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
  reference:    { type: String, required: true, unique: true },
  type:         { type: String, enum: ['temperature', 'humidity', 'co2'], required: true },
  location:     { type: String, required: true },
  minThreshold: { type: Number, required: true },
  maxThreshold: { type: Number, required: true },
  status:       { type: String, enum: ['active', 'inactive'], default: 'active' }
});

module.exports = mongoose.model('Sensor', sensorSchema);