const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Station = sequelize.define('station', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  station_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  altitude: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Station;
