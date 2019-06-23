'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const model = require('../../models');
const Op = model.Sequelize.Op;

const userModel = 'users';

const moment=require('moment');

module.exports = (req, callback) => {
    
    model[userModel].findAll({
        limit:5,

        where: {
             deleted: 0,
             isCV:1
        },

        order: [ [ 'id', 'DESC' ]]


    }).then(usersList => {
        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, usersList));


    })
}