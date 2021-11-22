require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const port = 8080

const usersRouter = require('./routes/users.routes');
const productsRouter = require('./routes/products.routes');
const operationsRouter = require('./routes/operations.routes');
const verifyToken = require('./middleware/verifyToken');
const customersRouter = require('./routes/customer.routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/products', verifyToken, productsRouter);
app.use('/operations', operationsRouter);
app.use('/customers', customersRouter);

app.listen(port, () => {
  console.log(`App running at port: ${port}`)
})

module.exports = app;
