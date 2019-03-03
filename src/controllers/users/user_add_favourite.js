'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const model = require('../../models');
const Op = model.Sequelize.Op;
const userModel = 'users';

const userfavModel = 'user_favourite';


module.exports = (req, callback) => {
    model[userModel].findOne({
        where: { id: req.user_fav_id }
    }).then(usersList => {

        if (usersList == null) {

            // Returning 404 not found if not team found
            return callback(null, responses.notFoundResponse());
        } else {


let userObj={
    user_id:req.user_id,
    user_fav_id:req.user_fav_id,
    name:usersList.name,
    phone:usersList.phone,
    date_of_birth:usersList.date_of_birth,
    gender:usersList.gender,
    interested:usersList.interested,
    beliefs:usersList.beliefs,
    have_religious:usersList.have_religious,
    pray:usersList.pray,
    relocate:usersList.relocate,
    marital_status:usersList.marital_status,
    looking_for:usersList.looking_for,
    have_children:usersList.have_children,
    education:usersList.education,
    occuption:usersList.occuption,
    ethnicity:usersList.ethnicity,
    nationality:usersList.nationality,
    decription:usersList.decription,
    age:usersList.age,
    distance:usersList.distance,
    profile_picture:usersList.profile_picture,
    country:usersList.country,
    height:usersList.height,

}
            model[userfavModel].create(userObj).then(addFavourite => {


                return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.ADDITION_SUCCESSFULL));
            })
        }

    })
}