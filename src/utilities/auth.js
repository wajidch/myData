'use strict';

const config = require('../../configs/config');
const jwt = require('jsonwebtoken');
const model = require('../models');

/**
 * This function create's JWT token for Auth
 * @param data provide email, id and scope of user
 * @returns JWT coded token
 */
const createToken = (data) => {
    return jwt.sign({
            email: data.email,
            id: data.id,
            scope: data.scope
        },
        config.secretKey, {
            algorithm: 'HS256',
            expiresIn: '30d'
        }
    );
};

// This Verify function token check the expiration time of jwt token
let key= config.secretKey;
const verifyToken =(data)=>{

    try {
        return jwt.verify(data,key);
    } catch (error) {
        return error
    }
  
}


/**
 * This function is to validate JWT token
 * @param decoded is to decode JWT token to normal data
 * @param request is holding JWT token in header method from user
 * @param callback will return the response is JWT token valid or not
 */
const validateToken = (decoded, request, callback) => {
    const tokenInfo = {
        id: decoded.id,
        email: decoded.email,
        scope: decoded.scope,
        token: request.headers.authorization
    };
   let modelType = 'p_user';
    if (tokenInfo.scope[0] === 'USER' || tokenInfo.scope[0] === 'ADMIN') {
        modelType = 'p_user';
    }
    model[modelType].findOne({
        where: {
            id: tokenInfo.id,
            email: tokenInfo.email,
            token: tokenInfo.token
        }
    }).then(valid => {
        if (!valid) {
            return callback(null, false);
        } else {
            return callback(null, true);
        }
    }).catch(err => {
        return callback(err)
    })
};


module.exports = {
    createToken: createToken,
    validateToken: validateToken,
    verifyToken: verifyToken
};
