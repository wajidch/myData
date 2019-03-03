module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_favourite', {

        
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            user_id: {
                type: DataTypes.INTEGER(11),
               
            },
            user_fav_id: {
                type: DataTypes.INTEGER(11),
               
            },
            name:{
                type:DataTypes.STRING(45)
            },
            phone:{
                type:DataTypes.STRING(45)
            },
            date_of_birth:{
                type:DataTypes.STRING(45)
            },
            gender:{
                type:DataTypes.STRING(45)
            },
            interested:{
                type:DataTypes.STRING(45)
            },
            beliefs:{
                type:DataTypes.STRING(45)
            },
            have_religious:{
                type:DataTypes.STRING(45)
            },
            pray:{
                type:DataTypes.STRING(45)
            },
            relocate:{
                type:DataTypes.STRING(45)
            },
            marital_status:{
                type:DataTypes.STRING(45)
            },
            looking_for:{
                type:DataTypes.STRING(45)
            },
            have_children:{
                type:DataTypes.STRING(45)
            },
            education:{
                type:DataTypes.STRING(45)
            },
            occuption:{
                type:DataTypes.STRING(45)
            },
            ethnicity:{
                type:DataTypes.STRING(45)
            },
            nationality:{
                type:DataTypes.STRING(45)
            },
            decription:{
                type:DataTypes.STRING(300)
            },
            age:{
                type:DataTypes.STRING(45)
            },
            distance:{
                type:DataTypes.STRING(45)
            },
            profile_picture:{
                type:DataTypes.STRING(45)
            },
            country:{
                type:DataTypes.STRING(45)
            },
            height:{
                type:DataTypes.STRING(45)
            },
            deleted: {
                type: DataTypes.INTEGER(4),
                defaultValue: '0'
            },
        
    },
     {
        tableName: 'user_favourite'
    });
}