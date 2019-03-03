"use strict";

const statusCodes = require("http-status-codes");
const responseMsg = require("../../constants/response-messages");

const dataResponse = (status, message, data) => {
    return {
        'success': true,
        'statusCode': status,
        'message': message,
        'response': data
    }
};

const additionResponse = (message = responseMsg.ADDITION_SUCCESSFULL) => {
    return {
        'success': true,
        'statusCode': statusCodes.OK,
        'message': message
    }
};

const deletedResponse = () => {
    return {
        'success': true,
        'statusCode': statusCodes.OK,
        'message': responseMsg.DELETION_SUCCESSFULL
    }
};

const updationResponse = () => {
    return {
        'success': true,
        'statusCode': statusCodes.OK,
        'message': responseMsg.UPDATION_SUCCESSFULL
    }
};

const notFoundResponse = () => {
    return {
        'success': false,
        'statusCode': statusCodes.NOT_FOUND,
        'message': responseMsg.NOT_FOUND
    }
};

const duplicateResponse = () => {
    return {
        'success': false,
        'statusCode': statusCodes.CONFLICT,
        'message': responseMsg.ALREADY_EXISTS
    }
};

const makeMessageResponse = (success, status, message) => {
    return {
        'success': success,
        'statusCode': status,
        'message': message
    };
};

const unauthorizedResponse = () => {
    return {
        'success': false,
        'statusCode': statusCodes.NON_AUTHORITATIVE_INFORMATION,
        'message': responseMsg.INVALID_EMAIL_PASSWORD
    }
};


module.exports = {
    dataResponse: dataResponse,
    additionResponse: additionResponse,
    deletedResponse: deletedResponse,
    updationResponse: updationResponse,
    notFoundResponse: notFoundResponse,
    duplicateResponse: duplicateResponse,
    makeMessageResponse: makeMessageResponse,
    unauthorizedResponse: unauthorizedResponse
};