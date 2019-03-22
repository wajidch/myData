'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const model = require('../../models');
const Op = model.Sequelize.Op;

const userModel = 'users';


module.exports = (req, callback) => {
    model[userModel].findAll({
        where: { deleted: 0 },

        attributes: ['id', 'name']
    }).then(usersList => {


        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, usersList));



    })
}