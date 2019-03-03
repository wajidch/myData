'use strict';

const bcrypt = require('bcrypt');


/**
 * The compare password function is to generate plain password user enter to hash and then compare with user password exists in database
 * @param params will be holding plain password entered by user and hash password which was in database
 * @param reply will return the response of boolean if password matched then true otherwise false
 */
const comparePassword = (params, reply) => {
    bcrypt.compare(params.password, params.dbPassword, (err, valid) => {
        if (err) return reply(err);
        if (!valid) {
            return reply(null, false)
        } else {
            return reply(null, true)
        }
    });
};


/**
 * This funcation is to generate has password with plain password given by user
 * @param params will be holding plain password given by user
 * @param reply return hash password if no error generating password
 */
const hashPassword = (params, reply) => {
    bcrypt.hash(params.password, 10)
        .then(hash => {
            return reply(null, hash)
        })
        .catch(err => {
            return reply(err)
        })
};

module.exports = {
    comparePassword: comparePassword,
    hashPassword: hashPassword
};