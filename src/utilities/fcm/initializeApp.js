


const serviceAccount = require('./serviceAccountKey.json');

const admin = require('firebase-admin');





admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://loveedo-b8e35.firebaseio.com"
});


module.exports = {
    admin
}