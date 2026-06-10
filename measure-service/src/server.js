require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Measure DB connected'))
    .catch(err => console.error(err));

app.use('/measures', require('./routes/measures'));

app.listen(process.env.PORT, () =>
    console.log(`Measure service running on port ${process.env.PORT}`)
);
