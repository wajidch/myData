const admin = require('firebase-admin');

const initilze = require('../fcm/initializeApp')
function sendToMultiple(message, tokens) {
    initilze.admin;
    return new Promise(function (reslove, reject) {
        admin.messaging().sendToDevice(tokens, message)
            .then(function (response) {
                // See the MessagingDevicesResponse reference documentation for
                // the contents of response.
                let res = JSON.stringify(response);
                reslove(res)

            })
            .catch(function (error) {
                reject(error)
            });

    })


}
module.exports = {
    sendToMultiple
}