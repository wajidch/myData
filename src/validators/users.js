'use strict';

const Joi = require('joi');

const add = Joi.object({

   
    name: Joi.string().optional(),
    phone:Joi.string().optional(),
    token:Joi.string().optional(),
    date_of_birth:Joi.string().optional(),
    gender:Joi.string().optional(),
    interested:Joi.string().optional(),
    beliefs:Joi.string().optional(),
    have_religious:Joi.string().optional(),
    pray:Joi.string().optional(),
    relocate:Joi.string().optional(),
    marital_status:Joi.string().optional(),
    looking_for:Joi.string().optional(),
    have_children:Joi.string().optional(),
    education:Joi.string().optional(),
    occuption:Joi.string().optional(),
    ethnicity:Joi.string().optional(),
    nationality:Joi.string().optional(),
    decription:Joi.string().optional(),
    profile_picture:Joi.string().optional(),
    lat:Joi.string().optional(),
    lng:Joi.string().optional(),
    location:Joi.string().optional(),
  

});

const edit = Joi.object({

    user_id:Joi.number().required(),
    name: Joi.string().empty('').optional(),
    phone:Joi.string().empty('').optional(),
    token:Joi.string().empty('').optional(),
    date_of_birth:Joi.string().empty('').optional(),
    gender:Joi.string().empty('').optional(),
    interested:Joi.string().empty('').optional(),
    beliefs:Joi.string().empty('').optional(),
    have_religious:Joi.string().empty('').optional(),
    pray:Joi.string().empty('').optional(),
    relocate:Joi.string().empty('').optional(),
    marital_status:Joi.string().empty('').optional(),
    looking_for:Joi.string().empty('').optional(),
    have_children:Joi.string().empty('').optional(),
    education:Joi.string().empty('').optional(),
    occuption:Joi.string().empty('').optional(),
    ethnicity:Joi.string().empty('').optional(),
    nationality:Joi.string().empty('').optional(),
    decription:Joi.string().empty('').optional(),
    country:Joi.string().empty('').optional(),
    profile_picture:Joi.string().empty('').optional(),
    
  

});
const userlist=Joi.object({

    phone:Joi.string().required(),
    minAge:Joi.string().optional(),
    maxAge:Joi.string().optional(),
    minDistance:Joi.string().optional(),
    maxDistance:Joi.string().optional(),
})
const userLiked=Joi.object({
    user_id:Joi.number().required(),
    user_liked_id:Joi.number().required(),
    user_liked_name:Joi.string().required(),
    isLike:Joi.string().required()
})
const userLikeList={
    user_id:Joi.number().required(),
}

const whoLikeMe={
    user_id:Joi.number().required(),
}
const deleteMyAccount=Joi.object({
    user_id:Joi.number().required()
})

const userSearch=Joi.object({
    
    ethnicity:Joi.string().optional(),
    beliefs:Joi.string().optional(),
    marital_status:Joi.string().optional(),
    minheight:Joi.string().optional(),
    maxheight:Joi.string().optional(),
    minAge:Joi.string().optional(),
    maxAge:Joi.string().optional(),
    minDistance:Joi.string().optional(),
    maxDistance:Joi.string().optional(),
})
const userFavourite=Joi.object({
    user_id:Joi.number().required(),
    user_fav_id:Joi.number().required()
})
const userFavouriteList=Joi.object({
    user_id:Joi.number().required(),
  
})
const userLogin=Joi.object({
    phone:Joi.string().required()
})
module.exports = {
    add,
    userlist,
    userLiked,
    deleteMyAccount,
    userSearch,
    userFavourite,
    userLogin,
    userFavouriteList,
    edit,
    userLikeList,
    whoLikeMe
};