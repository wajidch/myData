'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const model = require('../../models');
const Op = model.Sequelize.Op;

const userModel = 'users';
const userLikeModel = 'user_likes';


module.exports = (req, callback) => {

    console.log(req)
    model[userModel].findAll({
        where: {
            gender: { [Op.eq]: req.gender },
            deleted: { [Op.eq]: req.deleted }
        },


    }).then(SearchUser => {


        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, SearchUser));
    })



}