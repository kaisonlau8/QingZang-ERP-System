const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const LocomotiveModel = sequelize.define('locomotive_model', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  model_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  axle_weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  calculated_weight: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  max_starting_traction: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  continuous_speed: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  continuous_traction: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  max_speed: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  max_speed_traction: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  limiting_slope_locomotive_resistance: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  limiting_slope_freight_car_resistance: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  max_speed_locomotive_resistance: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  max_speed_freight_car_resistance: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = LocomotiveModel;
