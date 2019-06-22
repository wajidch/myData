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
            institution_name:{
                type:DataTypes.STRING(500)
            },
            Qualifaction:{
                type:DataTypes.STRING(500)
            },
            interest:{
                type:DataTypes.STRING(500)
            },
            reference:{
                type:DataTypes.STRING(500)
            },
          
            deleted: {
                type: DataTypes.INTEGER(4),
                defaultValue: '0'
            },
          
          
        
    },
     {
        tableName: 'users'
    });
}