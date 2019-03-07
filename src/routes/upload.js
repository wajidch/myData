'use strict';

const Joi = require('joi');
const statusCodes = require('http-status-codes');
const responseMsg = require("../../constants/response-messages");
const plugins = require('../../constants/routes-config');
const responses = require('../utilities/responses');
const config = require('../../configs/config');

const upload = require('../utilities/upload');

module.exports = [
    {
    method: "POST",
    path: config.apiPrefix + "/upload",
    config: {
        tags: ['api', 'Upload'],
        payload: {
            output: "stream",
            parse: true,
            allow: "multipart/form-data",
            maxBytes: 2 * 1000 * 1000
        }
    },
    handler: (request, response) => {
        var result = [];
        for(var i = 0; i < request.payload["file"].length; i++) {
            result.push(request.payload["file"][i].hapi);
            request.payload["file"][i].pipe(fs.createWriteStream(__dirname + "/uploads/" + request.payload["file"][i].hapi.filename))
        }
        response(result);
    }
}
// Upload file

];