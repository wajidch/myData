'use strict';

const Joi = require('joi');
const statusCodes = require('http-status-codes');
const responseMsg = require("../../constants/response-messages");
const plugins = require('../../constants/routes-config');
const responses = require('../utilities/responses');
const config = require('../../configs/config');
const fs=require('fs')
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
        var result ={
        statusCode:200,
        fileName:request.payload["file"].hapi.filename ,
        message:'File uploaded successfully'
    }
            request.payload["file"].pipe(fs.createWriteStream("C:/xampp/htdocs/upload/" + request.payload["file"].hapi.filename))
        
        response(result);
    }
}
// Upload file

];