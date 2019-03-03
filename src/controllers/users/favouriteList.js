'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const model = require('../../models');
const Op = model.Sequelize.Op;

const userfavModel = 'user_favourite';



module.exports = (req, callback) => {
    console.log(req)
    model[userfavModel].findAll({
        where: { user_id: req.user_id }
    }).then(usersList => {

        if (usersList == null) {

            // Returning 404 not found if not team found
            return callback(null, responses.notFoundResponse());
        } else {



                return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, usersList));
            
        }

    })
}