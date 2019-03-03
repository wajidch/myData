'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const model = require('../../models');
const Op = model.Sequelize.Op;

const userLikeModel = 'users';

module.exports = (req, callback) => {
    
let userObj={
    user_id:req.user_id,
    user_fav_id:req.user_fav_id,
    name:req.name,
    phone:req.phone,
    date_of_birth:req.date_of_birth,
    gender:req.gender,
    interested:req.interested,
    beliefs:req.beliefs,
    have_religious:req.have_religious,
    pray:req.pray,
    relocate:req.relocate,
    marital_status:req.marital_status,
    looking_for:req.looking_for,
    have_children:req.have_children,
    education:req.education,
    occuption:req.occuption,
    ethnicity:req.ethnicity,
    nationality:req.nationality,
    decription:req.decription,
    age:req.age,
    distance:req.distance,
    profile_picture:req.profile_picture,
    country:req.country,
    height:req.height,

}
  model[userLikeModel].update(userObj,{
where:{
    id:req.user_id
}
}).then(updated =>{
    return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.UPDATION_SUCCESSFULL));
  }).catch(err =>{
      return callback(err);
  })
}