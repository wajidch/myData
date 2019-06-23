'use strict';

const statusCodes = require('http-status-codes');
const plugins = require('../../constants/routes-config');
const responses = require('../utilities/responses');
const config = require('../../configs/config');

const validator = require('../validators/users');
const login = require('../controllers/users/login');
const signUp = require('../controllers/users/sign-up');
const createCV= require('../controllers/users/add-cv');
const cvList = require('../controllers/users/list');
const mostviewCV=require('../controllers/users/most-view-cv');
const detailCV=require('../controllers/users/detailCV');
const updateCV=require('../controllers/users/update-cv');


const Joi = require('joi');
module.exports = [

    // Users login
    {
        method: 'POST',
        path: config.apiPrefix + '/User/login',
        config: {
            description: 'Login for User',
            notes: 'Login for user using email and password.',
            tags: ['api', 'User'],
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
                payload: validator.userLogin,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },
    // Users Register
    {
        method: 'POST',
        path: config.apiPrefix + '/User/Register',
        config: {
            description: 'Register for User',
            notes: 'Register for user.',
            tags: ['api', 'User'],
            auth: false,
            handler: (request, reply) => {
                signUp(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.add,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },
    {
        method: 'PUT',
        path: config.apiPrefix + '/User/updateCV',
        config: {
            description: 'updateCV',
            notes: 'updateCV.',
            tags: ['api', 'User'],
            auth: false,
            handler: (request, reply) => {
                updateCV(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.updateCV,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },

    // Create Cv
    {
        method: 'POST',
        path: config.apiPrefix + '/User/createCV',
        config: {
            description: 'Create CV of logged in user',
            notes: 'Create CV of logged in user.',
            tags: ['api', 'User'],
            auth: false,
            handler: (request, reply) => {
                createCV(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.cvCreate,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },
    
    //  cv list API
    {
        method: 'GET',
        path: config.apiPrefix + '/User/cvList',
        config: {
            description: 'cvList',
            notes: 'cvList',
            tags: ['api', 'User'],
            auth: false,

            handler: (request, reply) => {
                cvList(request.query, (err, results) => {
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
     //  cv list API
     {
        method: 'GET',
        path: config.apiPrefix + '/User/mostviewCV',
        config: {
            description: 'cvList',
            notes: 'cvList',
            tags: ['api', 'User'],
            auth: false,

            handler: (request, reply) => {
                mostviewCV(request.query, (err, results) => {
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
    {
        method: 'GET',
        path: config.apiPrefix + '/User/detailCV',
        config: {
            description: 'detailCV',
            notes: 'detailCV',
            tags: ['api', 'User'],
            auth: false,

            handler: (request, reply) => {
                detailCV(request.query, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                query: validator.detailCV,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },
    //  Product list API
  
];
