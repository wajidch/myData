'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const model = require('../../models');
const Op = model.Sequelize.Op;

const userModel = 'users';
const userLikeModel = 'user_likes';
const userPreferenceModel = 'user_preference';


module.exports = (req, callback) => {
    model[userModel].findOne({
        where: { phone: req.phone }
    }).then(usersList => {

        if (usersList == null) {

            // Returning 404 not found if not team found
            return callback(null, responses.notFoundResponse());
        } else {

            model[userPreferenceModel].findAll({
                where:{
                    user_id:usersList.id
                }
            }).then(userPreference=>{
                if(userPreference.length){
                    model[userModel].findAll({
                        where: {
                            [Op.or]: [
                                { country: usersList.country },
                                { beliefs: usersList.beliefs },
                                { marital_status: usersList.marital_status },
                                { looking_for: usersList.looking_for },
                                { age: { [Op.gte]: req.minAge, [Op.lte]: req.maxAge } },

                                { distance: { [Op.eq]:userPreference.distance_value} },
        
        
                            ],
                            deleted:0
                        }
                       
                    }).then(MatchUser => {
        
        
                        return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, MatchUser));
                    })
                }
                else{
                model[userModel].findAll({
                    where: {
                        [Op.or]: [
                            { interested: usersList.interested },
                            { beliefs: usersList.beliefs },
                            { marital_status: usersList.marital_status },
                            { looking_for: usersList.looking_for },
                            { age: { [Op.gte]: req.minAge, [Op.lte]: req.maxAge } },
                            { distance: { [Op.gte]: req.minDistance, [Op.lte]: req.maxDistance } },
    
    
                        ],
                        deleted:0
                    }
                   
                }).then(MatchUser => {
    
    
                    return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, MatchUser));
                })
            }
            })


           
        }

    })
}