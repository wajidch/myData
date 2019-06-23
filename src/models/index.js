"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../../configs/config");

const sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
    host: config.db.host,
    dialect: 'mysql',
    operatorsAliases: Sequelize.Op,
    pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
    define: {
        timestamps: false,
        freezeTableName: true
    },
    logging: (str) => {

    }
});
const db = {};

fs.readdirSync(__dirname).filter(function (file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
}).forEach(function (file) {
    // console.log(file);
    let model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
    // console.log("Loading model: " + model.name);
});

Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});






db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;