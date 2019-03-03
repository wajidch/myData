'use strict';

const config = require('../../configs/config');
const statusCodes = require('http-status-codes');


module.exports = [
    {
        method: 'GET',
        path: '/',
        config: {
            description: 'Server Root',
            notes: 'Loveedo System APIs',
            tags: ['api', 'server information'],
            auth: false,
            handler: (request, reply) => {
                reply({
                    status: statusCodes.OK,
                    message: 'Loveedo backend server running successfully!.',
                    response: {
                        environment: config.environment,
                        base_url: config.serverUrl,
                        documentation: config.serverUrl + '/documentation',
                        s3imageURL: 'https://s3.us-east-2.amazonaws.com//'
                    }
                });
            },
        },
    },
];
