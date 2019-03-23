'use strict';

const statusCodes = require('http-status-codes');

const responseMsg = require("../../../../constants/response-messages");
const responses = require('../../../utilities/responses');
const model = require('../../../models');

const Op = model.Sequelize.Op;

const notificationModel = 'notification';


module.exports = (req, callback) => {

    model[notificationModel].findAll({


    }).then(notificationlist => {


        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, notificationlist));
    })



}