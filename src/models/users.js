module.exports = function (sequelize, DataTypes) {
    return sequelize.define('users', {

        
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            user_name:{
                type:DataTypes.STRING(45)
            },
            user_email:{
                type:DataTypes.STRING(45)
            },
            user_password:{
                type:DataTypes.STRING(45)
            },
            user_phone:{
                type:DataTypes.STRING(45)
            },
            website:{
                type:DataTypes.STRING(45)
            },
            address:{
                type:DataTypes.STRING(200)
            },
            job_title:{
                type:DataTypes.STRING(45)
            },
            company_name:{
                type:DataTypes.STRING(200)
            },
            startDate:{
                type:DataTypes.DATE
            },
            endDate:{
                type:DataTypes.DATE
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
            token:{
                type:DataTypes.STRING(500)
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
            lat:{
                type:DataTypes.STRING(100)

            },

            lng:{
                type:DataTypes.STRING(100)
            },
            location:
            {
                type:DataTypes.STRING(100)
            },
            image_blur:{
                type: DataTypes.INTEGER(4),
                defaultValue: '0'
            }
          
        
    },
     {
        tableName: 'users'
    });
}