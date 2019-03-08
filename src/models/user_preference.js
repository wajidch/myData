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
            
        
    },
     {
        tableName: 'user_preference'
    });
}