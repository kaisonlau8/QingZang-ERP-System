const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const LocomotiveModel = require('./locomotiveModel');
const Station = require('./station');

const ModelStationAltitudeCoefficient = sequelize.define('model_station_altitude_coefficient', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  locomotive_model_id: {
    type: DataTypes.INTEGER,
    references: {
      model: LocomotiveModel,
      key: 'id',
    },
  },
  station_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Station,
      key: 'id',
    },
  },
  altitude_coefficient: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

// 设置关联关系
LocomotiveModel.hasMany(ModelStationAltitudeCoefficient, { foreignKey: 'locomotive_model_id' });
Station.hasMany(ModelStationAltitudeCoefficient, { foreignKey: 'station_id' });
ModelStationAltitudeCoefficient.belongsTo(LocomotiveModel, { foreignKey: 'locomotive_model_id' });
ModelStationAltitudeCoefficient.belongsTo(Station, { foreignKey: 'station_id' });

module.exports = ModelStationAltitudeCoefficient;
