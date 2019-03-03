'use strict';

module.exports = {

    // Swagger plugin for routes
    swaggerPlugin: {
        'hapi-swagger': {
            responses: {
                '200': {'description': 'ACTION_SUCCESSFUL'},
                '400': {'description': 'INVALID_PARAMS'}
            },
            payloadType: 'json'
        }
    },

    swaggerPluginFile: {
        'hapi-swagger': {
            payloadType: 'form'
        }
    },

    // Upload payload for routes
    uploadPayload: {
        output: 'stream',
        allow: 'multipart/form-data',
        maxBytes: 20000000,
        parse: true,
        timeout: 900000
    },

    // Upload time out for routes
    uploadTimeOut: {
        socket: 950000
    },

    //Attendance report file path
    path:{
        url:process.env.SERVER_URL+'/reports'
    }
};
