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

    


             model[userModel].update(req,{
                 where:{
                     user_email:req.user_email
                 }
             }).then(updated=>{

                return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.UPDATION_SUCCESSFULL, updated));


             })


        
  
}