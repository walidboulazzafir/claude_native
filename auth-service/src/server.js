require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Auth DB connected'))
    .catch(err => console.error(err));

app.use('/auth', require('./routes/auth'));

app.listen(process.env.PORT, () =>
    console.log(`Auth service running on port ${process.env.PORT}`)
);