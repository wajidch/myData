




'use strict';

const statusCodes = require('http-status-codes');

const responseMsg = require("../../../../constants/response-messages");
const responses = require('../../../utilities/responses');

const singleNotification = require('../../../utilities/fcm')

const model = require('../../../models');
const Op = model.Sequelize.Op;

const userModel = 'users';
const notificationModel = 'notification'
module.exports = (req, callback) => {

    model[userModel].findOne({
        where: {
            id: req.userId
        }
    }).then(users => {


        const notificationRequestObj = {
            fcmToken: users.token,
        };


        notificationRequestObj.notification = { title: '', body: req.message }


        singleNotification(notificationRequestObj, (err, res) => {
            if (err) { callback(err) }
            else {

                let notificationCreate = {
                    notification: req.message
                }
                model[notificationModel].create(notificationCreate)
                return callback(null, responses.dataResponse(statusCodes.OK, 'Notification Send'));

            }

        })
    })


}