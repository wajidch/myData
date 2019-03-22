'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const model = require('../../models');
const Op = model.Sequelize.Op;

const userLikeModel = 'users';

module.exports = (req, callback) => {


    model[userLikeModel].update({ token: req.token }, {
        where: {
            id: req.user_id
        }
    }).then(updated => {
        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.UPDATION_SUCCESSFULL));
    }).catch(err => {
        return callback(err);
    })
}