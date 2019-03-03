'use strict';

const statusCodes = require('http-status-codes');
const plugins = require('../../constants/routes-config');
const responses = require('../utilities/responses');
const config = require('../../configs/config');

const validator = require('../validators/admin');
const login = require('../controllers/users/admin/login');
const userList=require('../controllers/users/admin/list')

const Joi = require('joi');
module.exports = [
   
    // Users login
    {
        method: 'POST',
        path: config.apiPrefix + '/admin/login',
        config: {
            description: 'Login for Admin',
            notes: 'Login for Admin using email and password.',
            tags: ['api', 'ADMIN'],
            auth: false,
            handler: (request, reply) => {
                login(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.login,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },
    {
        method: 'GET',
        path: config.apiPrefix + '/admin/user-list',
        config: {
            description: 'User List',
            notes: 'user list',
            tags: ['api', 'ADMIN'],
            auth:false,
          
            handler: (request, reply) => {
                userList(request.query, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
        
            plugins: plugins.swaggerPlugin
        }
    },
]