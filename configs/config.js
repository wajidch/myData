
'use strict';

const path = require('path');

module.exports = {
    projectName: process.env.PROJECT_NAME,
    secretKey: process.env.SERVER_SECRET_KEY,
    rootPath: path.join(__dirname, '/..'),
    //serverUrl: 'http://134.209.29.69:5001',
    serverUrl: 'localhost:5001',
    port: '5001',
    environment: process.env.NODE_ENV,
    mailer: {
        service: process.env.MAILER_PROVIDER,
        auth: {
            user: process.env.MAILER_ADDRESS,
            pass: process.env.MAILER_PWD,
        },
        tls: {
            rejectUnauthorized: false,
        },
    },
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
        connectionLimit: 15,
    },
    aws: {
        bucketId: process.env.AWS_S3_BUCKET,
        secretAccessKey: process.env.AWS_SECRET_KEY,
        accessKey: process.env.AWS_ACCESS_KEY,
        region: process.env.AWS_REGION
    },
    forceAppUpdate: process.env.FORCE_UPDATE,
    appVersion: process.env.APP_VERSION,
    codeExpiryTime: process.env.CODE_EXPIRY_TIME,
    googleCalendarApiKey: process.env.GOOGLE_CALENDAR_API_KEY,
    apiPrefix: '/api',
    /**
     * * '* * * * * *' - runs every second
     * '*!/5 * * * * *' - runs every 5 seconds
     * '10,20,30 * * * * *' - run at 10th, 20th and 30th second of every minute
     * '0 * * * * *' - runs every minute
     * '0 0 * * * *' - runs every hour (at 0 minutes and 0 seconds)
     **/
    notificationCronInterval: '* * * * * *', // every 30 seconds
};
