'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../../constants/response-messages");
const responses = require('../../../utilities/responses');
const model = require('../../../models');

const adminLoginModel = 'admin_login';
/**
 * User login API
 * @param req is containing payload sent from user
 * @param callback will return response to handler
 */
module.exports = (req, callback) => model[adminLoginModel].findOne({
    where: {
        email: req.email,
        password:req.password
    },
}).then(admin => {
    if (admin) {
        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.LOGIN_SUCCESSFULL, {id:admin.id}));
    } else {
        return callback(null, responses.notFoundResponse());
    }
}).catch(err => {
    return callback(err);
});