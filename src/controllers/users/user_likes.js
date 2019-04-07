'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const model = require('../../models');
const singleNotification = require('../../utilities/fcm')

const Op = model.Sequelize.Op;

const userLikeModel = 'user_likes';
const userModel = 'users';

module.exports = (req, callback) => {
  console.log(req);
  model[userLikeModel].create(req).then(created => {

    let findQuery = "SELECT * FROM user_likes e JOIN users u ON e.user_id=u.id WHERE u.id=" + req.user_id + " AND e.user_id=" + req.user_id + " AND e.user_liked_id=" + req.user_liked_id + " AND e.isLike='Yes' OR e.user_id=" + req.user_liked_id + " AND e.user_liked_id=" + req.user_id + " AND e.isLike='Yes';";
    model.sequelize.query(findQuery).then(userArrayList => {

      let userArray = []
      console.log("user Array", userArray)
      userArrayList[0].forEach(usersList => {
        if (usersList.id != req.user_id) {
          userArray.push({
            matched: true,
            user_id: usersList.id,
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
        model[userModel].findOne({
          where: {
            id: req.user_liked_id
          }
        }).then(userlist => {
          const notificationRequestObj = {
            fcmToken: userlist.token,
          };


          notificationRequestObj.notification = { title: 'User Like', body: `${userlist.name} like you` }

          console.log("Sdfs", notificationRequestObj)
          singleNotification(notificationRequestObj, (err, res) => {
            if (err) { callback(err) }
            else {

              let notificationCreate = {
                notification: `${userlist.name} like you`
              }
              model[notificationModel].create(notificationCreate)


            }

          })
        })
      });



      if (userArray.length) {
        return callback(null, responses.dataResponse(statusCodes.OK, "It's Matched", userArray));

      }
      else {
        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.ADDITION_SUCCESSFULL, userArray));

      }


    }).catch(err => {
      return callback(err);
    })
  })
}