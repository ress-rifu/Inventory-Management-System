/************************************************************
 * models/Employee.js
 ************************************************************/
const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Employee = sequelize.define('Employee', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  position: { type: DataTypes.STRING, allowNull: true },
  contact: { type: DataTypes.STRING, allowNull: true },
});

module.exports = { Employee };
