const router  = require('express').Router();
const Sensor  = require('../models/Sensor');
const auth    = require('../middlewares/authMiddleware');

// GET all sensors
router.get('/', auth, async (req, res) => {
  try {
    const sensors = await Sensor.find();
    res.json(sensors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create sensor (technician only)
router.post('/', auth, async (req, res) => {
  try {
    if (req.user.role !== 'technician')
      return res.status(403).json({ message: 'Technicians only' });
    const sensor = await Sensor.create(req.body);
    res.status(201).json(sensor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update sensor
router.put('/:id', auth, async (req, res) => {
  try {
    const sensor = await Sensor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(sensor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE sensor
router.delete('/:id', auth, async (req, res) => {
  try {
    await Sensor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Sensor deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;