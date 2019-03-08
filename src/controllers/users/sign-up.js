'use strict';

const randomString = require("randomstring");
const responses = require('../../utilities/responses');
const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");

const emailUtils = require('../../utilities/emails').employeeAddedEmail;
const hashPasswordUtility = require('../../utilities/password').hashPassword;
const model = require('../../models');
const Op = model.Sequelize.Op;
const userModel = 'users';




/**
 * Register user
 * @param req is containing payload sent from user
 * @param callback will return response to handler
 */
module.exports = (req, callback) => {

    model[userModel].findOne({ where: { phone: { [Op.eq]: req.phone }, deleted: 0 } }).then(employee => {
        if (employee) {

            return callback(null, responses.duplicateResponse());
        } else {




            model[userModel].create(req).then(created => {
                let signUp = {
                    id: created.id,
                    name: created.name,
                    phone: created.phone,
                    token: created.token,
                    date_of_birth: created.date_of_birth,
                    gender: created.gender,
                    interested: created.interested,
                    beliefs: created.beliefs,
                    have_religious: created.have_religious,
                    pray: created.pray,
                    relocate: created.relocate,
                    marital_status: created.marital_status,
                    looking_for: created.looking_for,
                    have_children: created.have_children,
                    education: created.education,
                    occuption: created.occuption,
                    ethnicity: created.ethnicity,
                    nationality: created.nationality,
                    decription: created.decription,
                    profile_picture: created.profile_picture,
                    lat: created.lat,
                    lng: created.lng,
                    location: created.location
                }
                return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.ADDITION_SUCCESSFULL, signUp));


            }).catch(err => {
                return callback(err)
            });

        }
    }).catch(err => {
        return callback(err);
    });
}