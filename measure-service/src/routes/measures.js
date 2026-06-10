const router = require('express').Router();
const Measure = require('../models/Measure');
const auth = require('../middlewares/authMiddleware');
const amqp = require('amqplib');

async function publishAnomaly(data) {
    try {
        const conn = await amqp.connect(process.env.RABBITMQ_URL);
        const channel = await conn.createChannel();
        await channel.assertQueue('measure.anomaly');
        channel.sendToQueue('measure.anomaly', Buffer.from(JSON.stringify(data)));
        setTimeout(() => conn.close(), 500);
    } catch (err) {
        console.error('RabbitMQ error:', err.message);
    }
}

// POST new measure
router.post('/', auth, async (req, res) => {
    try {
        const { sensorRef, value, type, minThreshold, maxThreshold } = req.body;
        const measure = await Measure.create({ sensorRef, type, value });

        // Check anomaly
        if (value < minThreshold || value > maxThreshold) {
            await publishAnomaly({ sensorRef, type, value });
        }

        res.status(201).json(measure);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET all measures
router.get('/', auth, async (req, res) => {
    try {
        const measures = await Measure.find().sort({ timestamp: -1 });
        res.json(measures);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;