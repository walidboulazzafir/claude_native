require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Sensor DB connected'))
    .catch(err => console.error(err));

app.use('/sensors', require('../routes/sensors'));

app.listen(process.env.PORT, () =>
    console.log(`Sensor service running on port ${process.env.PORT}`)
);