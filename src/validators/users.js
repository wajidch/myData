'use strict';

const Joi = require('joi');

const add = Joi.object({


    name: Joi.string().empty('').optional(),
    phone: Joi.string().empty('').optional(),
    token: Joi.string().empty('').optional(),
    date_of_birth: Joi.string().empty('').optional(),
    gender: Joi.string().empty('').optional(),
    interested: Joi.string().empty('').optional(),
    beliefs: Joi.string().empty('').optional(),
    have_religious: Joi.string().empty('').optional(),
    pray: Joi.string().empty('').optional(),
    relocate: Joi.string().empty('').optional(),
    marital_status: Joi.string().empty('').optional(),
    looking_for: Joi.string().empty('').optional(),
    have_children: Joi.string().empty('').optional(),
    education: Joi.string().empty('').optional(),
    occuption: Joi.string().empty('').optional(),
    ethnicity: Joi.string().empty('').optional(),
    nationality: Joi.string().empty('').optional(),
    decription: Joi.string().empty('').optional(),
    profile_picture: Joi.string().empty('').optional(),
    lat: Joi.string().empty('').optional(),
    lng: Joi.string().empty('').optional(),
    location: Joi.string().empty('').optional(),
    image_blur: Joi.number().integer().default(0)


});

const edit = Joi.object({

    user_id: Joi.number().required(),
    name: Joi.string().empty('').optional(),
    phone: Joi.string().empty('').optional(),
    token: Joi.string().empty('').optional(),
    date_of_birth: Joi.string().empty('').optional(),
    gender: Joi.string().empty('').optional(),
    interested: Joi.string().empty('').optional(),
    beliefs: Joi.string().empty('').optional(),
    have_religious: Joi.string().empty('').optional(),
    pray: Joi.string().empty('').optional(),
    relocate: Joi.string().empty('').optional(),
    marital_status: Joi.string().empty('').optional(),
    looking_for: Joi.string().empty('').optional(),
    have_children: Joi.string().empty('').optional(),
    education: Joi.string().empty('').optional(),
    occuption: Joi.string().empty('').optional(),
    ethnicity: Joi.string().empty('').optional(),
    nationality: Joi.string().empty('').optional(),
    decription: Joi.string().empty('').optional(),
    country: Joi.string().empty('').optional(),
    profile_picture: Joi.string().empty('').optional(),



});
const userlist = Joi.object({
    user_id: Joi.number().required(),
    phone: Joi.string().required(),
    minAge: Joi.string().optional(),
    maxAge: Joi.string().optional(),

})
const userLiked = Joi.object({
    user_id: Joi.number().required(),
    user_liked_id: Joi.number().required(),
    user_liked_name: Joi.string().required(),
    isLike: Joi.string().required()
})
const userLikeList = {
    user_id: Joi.number().required(),
}

const whoLikeMe = {
    user_id: Joi.number().required(),
}
const MatchUser = {
    user_id: Joi.number().required(),
}
const userPreferenceList = {
    user_id: Joi.number().required(),

}
const deleteMyAccount = Joi.object({
    user_id: Joi.number().required()
})

const userSearch = Joi.object({

    ethnicity: Joi.string().optional(),
    beliefs: Joi.string().optional(),
    marital_status: Joi.string().optional(),
    minheight: Joi.string().optional(),
    maxheight: Joi.string().optional(),
    minAge: Joi.string().optional(),
    maxAge: Joi.string().optional(),
    minDistance: Joi.string().optional(),
    maxDistance: Joi.string().optional(),
    gender: Joi.string().optional(),
    deleted: Joi.number().integer().optional()
})
const userFavourite = Joi.object({
    user_id: Joi.number().required(),
    user_fav_id: Joi.number().required()
})
const userFavouriteList = Joi.object({
    user_id: Joi.number().required(),

})
const userLogin = Joi.object({
    phone: Joi.string().required()
})
const userPreference = Joi.object({

    user_id: Joi.number().integer().required(),
    country: Joi.string().optional(),
    country_switch: Joi.number().integer().default(0),
    distance_switch: Joi.number().integer().default(0),
    distance_value: Joi.string().optional(),
    visible_photo_switch: Joi.number().integer().default(0),
    children_switch: Joi.number().integer().default(0),
    ethnicity: Joi.string().optional(),
    beliefs: Joi.string().optional(),
    marital_status: Joi.string().optional(),
    minheight: Joi.string().optional(),
    maxheight: Joi.string().optional(),
    minAge: Joi.string().optional(),
    maxAge: Joi.string().optional(),
    image_blur: Joi.number().integer().default(0),

})
const updateToken = {
    user_id: Joi.number().required(),
    token: Joi.string().empty('').optional(),
}
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
    whoLikeMe,
    userPreference,
    userPreferenceList,
    updateToken,
    MatchUser
};