'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const model = require('../../models');
const Op = model.Sequelize.Op;

const userLikeModel = 'user_likes';

module.exports = (req, callback) => {
    console.log(req);
  model[userLikeModel].create(req).then(created =>{
    return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.ADDITION_SUCCESSFULL));
  }).catch(err =>{
      return callback(err);
  })
}