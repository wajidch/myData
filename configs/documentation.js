'use strict';

const config = require('./config');

const swaggerOptions = {
    info: {
        'title': 'CV maker Backend Apis',
        'description': 'Powered by node, HapiJS, Joi, Sequelize and Swagger-UI',
    },
    securityDefinitions: {
        'jwt': {
            'type': 'apiKey',
            'name': 'Authorization',
            'in': 'header',
        },
    },
    grouping: 'tags',
    security: [{'jwt': []}],
   host: (config.serverUrl).replace(/(^\w+:|^)\/\//, '')
};

module.exports = {
    swaggerOptions,
};
