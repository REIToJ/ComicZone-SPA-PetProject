const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('myshop', 'myshopuser', 'x', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
