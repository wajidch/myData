'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const model = require('../../models');
const Op = model.Sequelize.Op;

const userModel = 'users';
const userLikeModel = 'user_likes';


module.exports = (req, callback) => {


    model[userLikeModel].findAll({
        where: {
            user_id: req.user_id,

        },
        include: [
            { model: model[userModel], as: 'userLike' }
        ]
    }).then(users => {

        let userArray = []
        users.forEach(usersList => {
            userArray.push({
                user_id: usersList.userLike.id,
                userLike: usersList.isLike,
                name: usersList.userLike.name,
                phone: usersList.userLike.phone,
                date_of_birth: usersList.userLike.date_of_birth,
                gender: usersList.userLike.gender,
                interested: usersList.userLike.interested,
                beliefs: usersList.userLike.beliefs,
                have_religious: usersList.userLike.have_religious,
                pray: usersList.userLike.pray,
                relocate: usersList.userLike.relocate,
                marital_status: usersList.userLike.marital_status,
                looking_for: usersList.userLike.looking_for,
                have_children: usersList.userLike.have_children,
                education: usersList.userLike.education,
                occuption: usersList.userLike.occuption,
                ethnicity: usersList.userLike.ethnicity,
                nationality: usersList.userLike.nationality,
                decription: usersList.userLike.decription,
                age: usersList.userLike.age,
                distance: usersList.userLike.distance,
                profile_picture: usersList.userLike.profile_picture,
                country: usersList.userLike.country,
                height: usersList.userLike.height,
                lat: usersList.userLike.lat,
                lng: usersList.userLike.lng,
                location: usersList.userLike.location,
                token: usersList.userLike.token,
                image_blur: usersList.userLike.image_blur
            })
        });

        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, userArray));
    })
    // console.log(req)



    // model[userLikeModel].findAll({
    //     where: {
    //         user_id: req.user_id,

    //     },

    // }).then(userlikelist => {

    //     let userId = []
    //     userlikelist.forEach(user => {
    //         userId.push(user.user_liked_id)
    //     });
    //     model[userModel].findAll({
    //         where: {
    //             id: { [Op.in]: userId },
    //             deleted: 0
    //         }
    //     }).then(userlist => {
    //         let userArray = []
    //         userlist.forEach(usersList => {
    //             userlikelist.forEach(user => {
    //                 console.log("use", user.isLike)
    //                 userArray.push
    //                     ({
    //                         user_id: usersList.id,
    //                         userLike: user.isLike,
    //                         name: usersList.name,
    //                         phone: usersList.phone,
    //                         date_of_birth: usersList.date_of_birth,
    //                         gender: usersList.gender,
    //                         interested: usersList.interested,
    //                         beliefs: usersList.beliefs,
    //                         have_religious: usersList.have_religious,
    //                         pray: usersList.pray,
    //                         relocate: usersList.relocate,
    //                         marital_status: usersList.marital_status,
    //                         looking_for: usersList.looking_for,
    //                         have_children: usersList.have_children,
    //                         education: usersList.education,
    //                         occuption: usersList.occuption,
    //                         ethnicity: usersList.ethnicity,
    //                         nationality: usersList.nationality,
    //                         decription: usersList.decription,
    //                         age: usersList.age,
    //                         distance: usersList.distance,
    //                         profile_picture: usersList.profile_picture,
    //                         country: usersList.country,
    //                         height: usersList.height,
    //                         lat: usersList.lat,
    //                         lng: usersList.lng,
    //                         location: usersList.location,
    //                         token: usersList.token,
    //                         image_blur: usersList.image_blur


    //                     })

    //             })
    //         })


    //         return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, userArray));


    //     })

    // })



}