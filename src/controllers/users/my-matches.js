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
            user_id: req.user_id

        },

        include: [
            { model: model[userModel], as: 'whoLikeMe' }
        ]

    }).then(userlist => {
        model[userLikeModel].findAll({

            where: {
                user_liked_id: req.user_id

            },

            include: [
                { model: model[userModel], as: 'whoLikeMe' }
            ]

        }).then(usermatch => {
            let userlistArray = [];
            let usermatchArray = []
            let userArray = []
            userlist.forEach(usersList => {
                userlistArray.push({
                    user_liked_id: usersList.user_liked_id,

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
            usermatch.forEach(usersList => {
                usermatchArray.push({
                    user_id: usersList.user_id,


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


            let users = userlistArray.concat(usermatchArray)
            userlistArray.forEach(usersList => {
                usermatchArray.forEach(userMatch => {

                    console.log("sefs", usersList.user_liked_id, userMatch.user_id)

                    if (usersList.user_liked_id == userMatch.user_id) {
                        userArray.push({
                            user_id: usersList.user_id,
                            user_liked_id: usersList.user_liked_id,
                            userLike: usersList.isLike,
                            name: usersList.name,
                            phone: usersList.phone,
                            date_of_birth: usersList.date_of_birth,
                            gender: usersList.gender,
                            interested: usersList.interested,
                            beliefs: usersList.beliefs,
                            have_religious: usersList.have_religious,
                            pray: usersList.pray,
                            relocate: usersList.relocate,
                            marital_status: usersList.marital_status,
                            looking_for: usersList.looking_for,
                            have_children: usersList.have_children,
                            education: usersList.education,
                            occuption: usersList.occuption,
                            ethnicity: usersList.ethnicity,
                            nationality: usersList.nationality,
                            decription: usersList.decription,
                            age: usersList.age,
                            distance: usersList.distance,
                            profile_picture: usersList.profile_picture,
                            country: usersList.country,
                            height: usersList.height,
                            lat: usersList.lat,
                            lng: usersList.lng,
                            location: usersList.location,
                            token: usersList.token,
                            image_blur: usersList.image_blur

                        })
                    }





                })

            });


            return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, userArray));


        })

    })



}