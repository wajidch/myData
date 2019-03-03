module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user_likes', {

        
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            user_id:{
                type: DataTypes.INTEGER(11),
            },
            user_liked_id:{
                type: DataTypes.INTEGER(11),
            },
            user_liked_name:{
                type: DataTypes.STRING(45)
            },
            isLike:{
                type: DataTypes.STRING(45)
            }
         
    },
     {
        tableName: 'user_likes'
    });
}