'use strict';

const Joi = require('joi');

const login={
    email:Joi.string().required(),
    password:Joi.string().required()
}


module.exports={
    login
}