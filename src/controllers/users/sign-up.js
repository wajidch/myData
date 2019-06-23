'use strict';

const randomString = require("randomstring");
const responses = require('../../utilities/responses');
const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");

const emailUtils = require('../../utilities/emails').employeeAddedEmail;
const hashPasswordUtility = require('../../utilities/password').hashPassword;
const model = require('../../models');
const Op = model.Sequelize.Op;
const userModel = 'users';




/**
 * Register user
 * @param req is containing payload sent from user
 * @param callback will return response to handler
 */
module.exports = (req, callback) => {

    model[userModel].findOne({ where: { user_email: { [Op.eq]: req.user_email }, deleted: 0,isCV:0 } }).then(users => {
        if (users) {

            return callback(null, responses.duplicateResponse());
        } else {




            model[userModel].create(req).then(created => {
              
                return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.ADDITION_SUCCESSFULL, created));


            }).catch(err => {
                return callback(err)
            });

        }
    }).catch(err => {
        return callback(err);
    });
}