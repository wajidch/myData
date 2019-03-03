'use strict';

const statusCodes = require('http-status-codes');
const responseMsg = require("../../../constants/response-messages");
const responses = require('../../utilities/responses');
const model = require('../../models');
const Op = model.Sequelize.Op;

const userModel = 'users';
const userLikeModel = 'user_likes';


module.exports = (req, callback) => {
   
console.log(req)
            model[userModel].findAll({
                where: {
                    [Op.or]: [
                        { ethnicity: req.ethnicity },
                        { beliefs: req.beliefs },
                        { marital_status: req.marital_status },
                        { height: { [Op.gte]: req.minheight, [Op.lte]: req.maxheight } },
                        { age: { [Op.gte]: req.minAge, [Op.lte]: req.maxAge } },
                        { distance: { [Op.gte]: req.minDistance, [Op.lte]: req.maxDistance } },


                    ],
                    deleted:0,
                },
         
                include:[
                 {model:model[userLikeModel],as:'userLike',required:false}   
                ]
            }).then(SearchUser => {


                return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, SearchUser));
            })
        

   
}