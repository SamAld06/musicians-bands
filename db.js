const path = require('path');
const { Sequelize, Model } = require('sequelize');

// TODO - create the new sequelize connection
const db = new Sequelize({
    dialect: "sqlite",
})
module.exports = {
    db,
    sequelize,
    Sequelize
};
