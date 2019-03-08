'use strict';

const randomString = require("randomstring");
const responses = require('../../utilities/responses');
const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");

const emailUtils = require('../../utilities/emails').employeeAddedEmail;
const hashPasswordUtility = require('../../utilities/password').hashPassword;
const model = require('../../models');
const Op = model.Sequelize.Op;
const userPreferenceModel = 'user_preference';




/**
 * Register user
 * @param req is containing payload sent from user
 * @param callback will return response to handler
 */
module.exports = (req, callback) => {

    model[userPreferenceModel].findOne({ where: { user_id: { [Op.eq]: req.user_id } } }).then(employee => {
        if (employee) {

            return callback(null, responses.duplicateResponse());
        } else {




            model[userPreferenceModel].create(req).then(created => {
                let userPreference = {
                    id: created.id,
                    user_id:created.user_id,
                    country:created.country,
                    country_switch:created.country_switch,
                    distance_switch:created.distance_switch,
                    distance_value:created.distance_value,
                    visible_photo_switch:created.visible_photo_switch,
                    children_switch:created.children_switch,
                    image_blur:created.image_blur
                }
                return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.ADDITION_SUCCESSFULL, userPreference));


            }).catch(err => {
                return callback(err)
            });

        }
    }).catch(err => {
        return callback(err);
    });
}