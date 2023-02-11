const Sequelize = require("sequelize");
const sequelize = require("../util/db.js");

const Contact = sequelize.define("contact", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  mobile_number: {
    type: Sequelize.BIGINT,
    allowNull: false,
  },
});

module.exports = Contact;
