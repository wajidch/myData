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
   


            model[userLikeModel].findAll({
                where: {
                    user_liked_id:req.user_id,
                    
                },
               
            }).then(userlikelist => {

                let userId=[]
                userlikelist.forEach(user => {
                    userId.push(user.user_id)
                });
                model[userModel].findAll({
                    where:{
                        id:{[Op.in]:userId}
                    }
                }).then(userlist=>{
                    let userArray=[]
                    userlist.forEach(usersList =>{
                        userlikelist.forEach(user => {
                            console.log("use",user.isLike)
                        userArray.push
                        ({
                            user_id:usersList.id,
                            userLike:user.isLike,
                            name:usersList.name,
                            phone:usersList.phone,
                            date_of_birth:usersList.date_of_birth,
                            gender:usersList.gender,
                            interested:usersList.interested,
                            beliefs:usersList.beliefs,
                            have_religious:usersList.have_religious,
                            pray:usersList.pray,
                            relocate:usersList.relocate,
                            marital_status:usersList.marital_status,
                            looking_for:usersList.looking_for,
                            have_children:usersList.have_children,
                            education:usersList.education,
                            occuption:usersList.occuption,
                            ethnicity:usersList.ethnicity,
                            nationality:usersList.nationality,
                            decription:usersList.decription,
                            age:usersList.age,
                            distance:usersList.distance,
                            profile_picture:usersList.profile_picture,
                            country:usersList.country,
                            height:usersList.height,
                            lat:userlist.lat,
                            lng:userlist.lng,
                            location:userlist.location

                        })
                        
                        })
                    })

                  
                    return callback(null, responses.dataResponse(statusCodes.OK, responseMsg.FETCH_SUCCESSFULL, userArray));


                })

            })
        

    
}