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



    model[userLikeModel].findAll({
        where: {
            user_liked_id: req.user_id,

        },
        include: [
            { model: model[userModel], as: 'whoLikeMe' }
        ]

    }).then(users => {

        let userArray = []
        users.forEach(usersList => {
            userArray.push({
                user_id: usersList.whoLikeMe.id,
                userLike: usersList.isLike,
                name: usersList.whoLikeMe.name,
                phone: usersList.whoLikeMe.phone,
                date_of_birth: usersList.whoLikeMe.date_of_birth,
                gender: usersList.whoLikeMe.gender,
                interested: usersList.whoLikeMe.interested,
                beliefs: usersList.whoLikeMe.beliefs,
                have_religious: usersList.whoLikeMe.have_religious,
                pray: usersList.whoLikeMe.pray,
                relocate: usersList.whoLikeMe.relocate,
                marital_status: usersList.whoLikeMe.marital_status,
                looking_for: usersList.whoLikeMe.looking_for,
                have_children: usersList.whoLikeMe.have_children,
                education: usersList.whoLikeMe.education,
                occuption: usersList.whoLikeMe.occuption,
                ethnicity: usersList.whoLikeMe.ethnicity,
                nationality: usersList.whoLikeMe.nationality,
                decription: usersList.whoLikeMe.decription,
                age: usersList.whoLikeMe.age,
                distance: usersList.whoLikeMe.distance,
                profile_picture: usersList.whoLikeMe.profile_picture,
                country: usersList.whoLikeMe.country,
                height: usersList.whoLikeMe.height,
                lat: usersList.whoLikeMe.lat,
                lng: usersList.whoLikeMe.lng,
                location: usersList.whoLikeMe.location,
                token: usersList.whoLikeMe.token,
                image_blur: usersList.whoLikeMe.image_blur
            })
        });


        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, userArray));




    })



}