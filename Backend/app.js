
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const requestLogger = require('./middlewares/requestLoggerMiddleware')
const indexRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 3000;
const app = express();

connectDB();
app.use(compression());
app.use(express.json());
app.use(cors());
app.use(requestLogger);
app.use('/api/v1', indexRouter);
app.use('/api/v1', productRouter);
app.use('/api/v1', categoryRouter);
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = app;