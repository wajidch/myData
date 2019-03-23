




'use strict';

const statusCodes = require('http-status-codes');

const responseMsg = require("../../../../constants/response-messages");
const responses = require('../../../utilities/responses');

const sendNotification = require('../../../utilities/fcmAdmin')

const model = require('../../../models');
const Op = model.Sequelize.Op;
const notificationModel = 'notification'

const userModel = 'users';

module.exports = (req, callback) => {

    model[userModel].findAll({
        where: {
            deleted: 0,

        }
    }).then(fcmToken => {

        let fcmtokenArray = [];
        fcmToken.forEach(token => {
            if (token.token != null && token.token != 'string') {
                fcmtokenArray.push(token.token)
            }
        });


        let notificationRequestObj = {
            data: {
            }, notification: { title: '', body: req.message }
        }

        console.log("s", notificationRequestObj)
        let notificationPromise = sendNotification.sendToMultiple(notificationRequestObj, fcmtokenArray);


        notificationPromise.then(success => {
            let notificationCreate = {
                notification: req.message
            }
            model[notificationModel].create(notificationCreate)
            return callback(null, responses.dataResponse(statusCodes.OK, 'Notification Sent'));

        }).catch(err => {
            return callback(null, err);

        })

    })

}