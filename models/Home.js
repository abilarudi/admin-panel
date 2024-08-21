// models/Home.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Home = sequelize.define("Home", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Home;
