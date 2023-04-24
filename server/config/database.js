const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('railway', 'root', 'mysecretpw', {
  host: '127.0.0.1',
  port: '3306',
  dialect: 'mariadb',
  logging: false,
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;
