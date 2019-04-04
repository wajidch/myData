const admin = require('firebase-admin');

/**
 * Importing FCM account key downloaded from FCM console
 */
const serviceAccount = require('./serviceAccountKey.json');

const initilze = require('../fcm/initializeApp')

/**
 * Initializing app on FCM using FCM library named admin
 */

/**
 * This is utility for FCM to send push notification
 * @param params will be holding notification object and FCM token to send token
 * @param reply will return success message with message id or error if notification not sent
 */
module.exports = (params, reply) => {
    initilze.admin;
    const message = { notification: params.notification, token: params.fcmToken };
    console.log("msg", message)
    admin.messaging().send(message).then((response) => {
        return reply(null, response)
    }).catch((error) => {
        return reply(error)
    });

};