const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// MiddleWares
app.use(morgan('dev'));

app.use(express.json());

// Routes
app.use('/api/v1/users', userRouter)
app.use('/api/v1/tours', tourRouter);

module.exports = app;