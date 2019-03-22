'use strict';

const statusCodes = require('http-status-codes');
const plugins = require('../../constants/routes-config');
const responses = require('../utilities/responses');
const config = require('../../configs/config');

const validator = require('../validators/users');
const login = require('../controllers/users/login');
const signUp = require('../controllers/users/sign-up');
const userList = require('../controllers/users/list');
const userLike = require('../controllers/users/user_likes');
const deleteMyAccount = require('../controllers/users/user_delete_account');
const userSearch = require('../controllers/users/user_serach');
const addfavourite = require('../controllers/users/user_add_favourite');
const userfavouriteList = require('../controllers/users/favouriteList');
const edit = require('../controllers/users/user_edit')
const userLikeList = require('../controllers/users/user-like-list')
const whoLikeMe = require('../controllers/users/whoLikeMe')
const userPreference = require('../controllers/users/user_preference');
const userPreferenceList = require('../controllers/users/user_preference_list');
const updateToken = require('../controllers/users/update-token');


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
        method: 'POST',
        path: config.apiPrefix + '/User/user_preference',
        config: {
            description: 'user preferenc',
            notes: '0 for false and 1 for true.',
            tags: ['api', 'User'],
            auth: false,
            handler: (request, reply) => {
                userPreference(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.userPreference,
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
        path: config.apiPrefix + '/User/user-add-favourite',
        config: {
            description: 'add to favourite',
            notes: 'add to favourite.',
            tags: ['api', 'User'],
            auth: false,
            handler: (request, reply) => {
                addfavourite(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.userFavourite,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },

    // Users Like
    {
        method: 'POST',
        path: config.apiPrefix + '/User/userLiked',
        config: {
            description: 'User like',
            notes: 'In user_id pass id of user which one is login and user_liked_id pass id of that user which login user want to like.',
            tags: ['api', 'User'],
            auth: false,
            handler: (request, reply) => {
                userLike(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.userLiked,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },
    // Users Delete
    {
        method: 'PUT',
        path: config.apiPrefix + '/User/deleteMyAccount',
        config: {
            description: 'Delete Account',
            notes: 'Delete Account.',
            tags: ['api', 'User'],
            auth: false,
            handler: (request, reply) => {
                deleteMyAccount(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.deleteMyAccount,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },

    {
        method: 'PUT',
        path: config.apiPrefix + '/User/userEdit',
        config: {
            description: 'Edit user information',
            notes: 'Edit user information.',
            tags: ['api', 'User'],
            auth: false,
            handler: (request, reply) => {
                edit(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.edit,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },

    {
        method: 'PUT',
        path: config.apiPrefix + '/User/updateToken',
        config: {
            description: 'Update token',
            notes: 'Update token.',
            tags: ['api', 'User'],
            auth: false,
            handler: (request, reply) => {
                updateToken(request.payload, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                payload: validator.updateToken,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },
    //  Product list API
    {
        method: 'GET',
        path: config.apiPrefix + '/User/user-list',
        config: {
            description: 'User List',
            notes: 'user list against id',
            tags: ['api', 'User'],
            auth: false,

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
            validate: {
                query: validator.userlist,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },
    {
        method: 'GET',
        path: config.apiPrefix + '/User/user-preference-list',
        config: {
            description: 'User List',
            notes: 'user list against id',
            tags: ['api', 'User'],
            auth: false,

            handler: (request, reply) => {
                userPreferenceList(request.query, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                query: validator.userPreferenceList,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },
    //  Product list API
    {
        method: 'GET',
        path: config.apiPrefix + '/User/user-like-list',
        config: {
            description: 'User like against login user',
            notes: 'user list against id',
            tags: ['api', 'User'],
            auth: false,

            handler: (request, reply) => {
                userLikeList(request.query, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                query: validator.userLikeList,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },
    {
        method: 'GET',
        path: config.apiPrefix + '/User/who-like-me',
        config: {
            description: 'list of user who like me',
            notes: 'user list against id',
            tags: ['api', 'User'],
            auth: false,

            handler: (request, reply) => {
                whoLikeMe(request.query, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                query: validator.whoLikeMe,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },
    //  Product list API
    {
        method: 'GET',
        path: config.apiPrefix + '/User/user-favourite-list',
        config: {
            description: 'User favourite List',
            notes: 'user list favourite against id',
            tags: ['api', 'User'],
            auth: false,

            handler: (request, reply) => {
                userfavouriteList(request.query, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                query: validator.userFavouriteList,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },
    //  Product list API
    {
        method: 'GET',
        path: config.apiPrefix + '/User/userSearch',
        config: {
            description: 'User List search',
            notes: 'user Search',
            tags: ['api', 'User'],
            auth: false,

            handler: (request, reply) => {
                userSearch(request.query, (err, results) => {
                    if (err) {
                        console.log(err);
                        reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                    } else {
                        reply(results);
                    }
                });
            },
            validate: {
                query: validator.userSearch,
                failAction: (request, reply, source, err) => {
                    reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
                }
            },
            plugins: plugins.swaggerPlugin
        }
    },
];
