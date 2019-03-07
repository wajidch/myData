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
//     {
//         method: 'POST',
//         path: config.apiPrefix + '/upload',
//         config: {
//             description: 'Upload File',
//             notes: 'Upload file to the S3 server.',
//             tags: ['api', 'Upload'],
           
         
//   handler: async (req, h) => {
//     const { payload } = req
//     const response = upload.handleFileUpload(payload.file)
//     return response
//   },
//             validate: {
//                 payload: Joi.object({
//                     file: Joi.any().meta({swaggerType: 'file'}).description('.png|.jpg file').required()
//                 }),
//                 failAction: (request, reply, source, err) => {
//                     reply(responses.makeMessageResponse(false, statusCodes.BAD_REQUEST, err.message.replace(/[^a-zA-Z ]/g, '')));
//                 }
//             },
//             payload: plugins.uploadPayload,
//             timeout: plugins.uploadTimeOut,
//             plugins: plugins.swaggerPluginFile
//         }
//     }
];