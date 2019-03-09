module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_preference', {

        
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: {
                type: DataTypes.INTEGER(11),
               
            },
            country: {
                type: DataTypes.STRING(45),
               
            },
            country_switch:{
                type: DataTypes.INTEGER(4),
                defaultValue: '0'
            },
            distance_switch:{
                type: DataTypes.INTEGER(4),
                defaultValue: '0'
            },
            distance_value:{
                type:DataTypes.STRING(45)
            },
            visible_photo_switch:{
                type: DataTypes.INTEGER(4),
                defaultValue: '0'
            },
            children_switch:{
                type: DataTypes.INTEGER(4),
                defaultValue: '0'
            },
            image_blur:{
                type: DataTypes.INTEGER(4),
                defaultValue: '0'
            },
            ethnicity:{
                type:DataTypes.STRING(45)
            },
            beliefs:{
                type:DataTypes.STRING(45)
            },
            marital_status:{
                type:DataTypes.STRING(45)
            },
            minheight:{
                type:DataTypes.STRING(45)
            },
            maxheight:{
                type:DataTypes.STRING(45)
            },
            minAge:{
                type:DataTypes.STRING(45)
            },
            maxAge:{
                type:DataTypes.STRING(45)
            },
        
    },
     {
        tableName: 'user_preference'
    });
}