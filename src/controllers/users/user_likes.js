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
    model[userModel].findOne({
      where: {
        id: req.user_liked_id
      }
    }).then(users => {

      model[userModel].findOne({
        where: {
          id: req.user_liked_id
        }
      }).then(userlist => {
        const notificationRequestObj = {
          fcmToken: users.token,
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
            return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.ADDITION_SUCCESSFULL));

          }

        })
      })

    })
  }).catch(err => {
    return callback(err);
  })
}