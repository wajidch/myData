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
        where: { phone: req.phone },
        deleted:0
    }).then(usersList => {

        if (usersList == null) {

            // Returning 404 not found if not team found
            return callback(null, responses.notFoundResponse());
        } else {

            model[userPreferenceModel].findOne({
                where:{
                    user_id:usersList.id
                }
            }).then(userPreference=>{
                if(userPreference){
                    model[userModel].findAll({
                        where: {
                            id:{[Op.ne]:req.user_id},
                            [Op.or]: [
                                { country: userPreference.country },
                                { beliefs: userPreference.beliefs },
                                { marital_status: userPreference.marital_status },
                                { ethnicity: userPreference.ethnicity },
                                { age: { [Op.gte]: userPreference.minAge, [Op.lte]: userPreference.maxAge } },
                                { height: { [Op.gte]: userPreference.minheight, [Op.lte]: userPreference.maxheight } },

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
                        id:{[Op.ne]:req.user_id},
                        [Op.or]: [
                            { interested: usersList.interested },
                            { beliefs: usersList.beliefs },
                            { marital_status: usersList.marital_status },
                            { looking_for: usersList.looking_for },
                            { age: { [Op.gte]: req.minAge, [Op.lte]: req.maxAge } },
                           
    
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