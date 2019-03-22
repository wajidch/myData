'use strict';

const Joi = require('joi');

const login = {
    email: Joi.string().required(),
    password: Joi.string().required()
}
const singleNotification = {
    userId: Joi.number().integer().required(),
    message: Joi.string().required()
}
const multiNotification = {
    message: Joi.string().required()
}

module.exports = {
    login,
    singleNotification,
    multiNotification
}