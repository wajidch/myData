'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const model = require('../../models');
const Op = model.Sequelize.Op;
const employeeModel = 'iams_employees';


/**
 * Employee logout API
 * @param req is containing payload sent from user
 * @param callback will return response to handler
 */
module.exports = (req, callback) => model[employeeModel].count({where: {token: {[Op.eq]: req.authorization}, deleted: 0}}).then(count => {
    if (count > 0) {
        return model.sequelize.transaction((t) => {
            return model[employeeModel].update({token: null}, {where: {token: {[Op.eq]: req.authorization}}, transaction: t});
        }).then(() => {
            return callback(null, responses.makeMessageResponse(true, statusCodes.OK, responseMsg.LOGOUT_SUCCESSFULL));
        }).catch(err => {
            return callback(err);
        });
    } else {
        return callback(null, responses.notFoundResponse());
    }
}).catch(err => {
    return callback(err);
});