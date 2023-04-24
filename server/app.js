const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const locomotiveModelRoutes = require('./routes/locomotiveModel');
const stationRoutes = require('./routes/station');
const modelStationAltitudeCoefficientRoutes = require('./routes/modelStationAltitudeCoefficient');
const db = require('./config/database');
const locomotiveModel = require('./models/locomotiveModel');
const station = require('./models/station');
const modelStationAltitudeCoefficient = require('./models/modelStationAltitudeCoefficient');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

//Synchronized Database Model
db.sync({ force: false }) // 将force设置为false，以便在表已存在时不会删除并重建它们。如果要强制重新创建表，可以将其设置为true。
  .then(() => {
    console.log('Database tables synced');
  })
  .catch((error) => {
    console.error('Error syncing database tables:', error);
  });

// Routes
app.use('/api/locomotive-models', locomotiveModelRoutes);
app.use('/api/stations', stationRoutes);
app.use('/api/model-station-altitude-coefficients', modelStationAltitudeCoefficientRoutes);

// Error handling
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ message: error.message });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
