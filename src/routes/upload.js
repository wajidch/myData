'use strict';

const Joi = require('joi');
const statusCodes = require('http-status-codes');
const responseMsg = require("../../constants/response-messages");
const plugins = require('../../constants/routes-config');
const responses = require('../utilities/responses');
const config = require('../../configs/config');

const upload = require('../utilities/upload');

module.exports = [
    
// Upload file
{
    method: 'POST',
    path: config.apiPrefix + '/upload',
    config: {
        description: 'Upload File',
        notes: 'Upload file to the S3 server.',
        tags: ['api', 'Upload'],
        auth:false,
        handler: (request, reply) => {
            const fileName = upload.generateImageName(request.payload.file.hapi.filename);
            console.log("ew",fileName)
            Promise.all([upload.localUpload(fileName)])
                .then(() => {
                    reply(null, responses.dataResponse(statusCodes.OK, responseMsg.UPLOAD_SUCCESSFULLY, {fileName: fileName}));
                })
                .catch(err => {
                    reply(responses.makeMessageResponse(false, statusCodes.EXPECTATION_FAILED, err.message.replace(/[^a-zA-Z ]/g, ''))).code(statusCodes.INTERNAL_SERVER_ERROR);
                });
        },
        validate: {
            payload: Joi.object({
                file: Joi.any().meta({swaggerType: 'file'}).description('.png|.jpg file').required()
            }),
            failAction: (request, reply, source, err) => {
                reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
            }
        },
        payload: plugins.uploadPayload,
        timeout: plugins.uploadTimeOut,
        plugins: plugins.swaggerPluginFile
    }
},
];