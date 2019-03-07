'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const createToken = require('../../utilities/auth').createToken;
const verifyToken = require('../../utilities/auth').verifyToken;
const comparePasswordUtility = require('../../utilities/password').comparePassword;
const model = require('../../models');

const userModel = 'users';
/**
 * User login API
 * @param req is containing payload sent from user
 * @param callback will return response to handler
 */
module.exports = (req, callback) => model[userModel].findOne({
    where: {
        phone: req.phone,
        deleted:0,
    },
}).then(employees => {
    if (employees) {
        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.LOGIN_SUCCESSFULL, employees));
    } else {
        return callback(null, responses.notFoundResponse());
    }
}).catch(err => {
    return callback(err);
});