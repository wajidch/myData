'use strict';


/**
 * Device types will be using when sending notifications
 * @type {{types: {APPLE: string, ANDROID: string}, delivery: {IN_APP: string, PUSH: string}}}
 */
module.exports = {
    types: {
        'APPLE': 'apple',
        'ANDROID': 'android',
    },
    delivery: {
        'IN_APP': 'in_app',
        'PUSH': 'push_notification',
    },
};
