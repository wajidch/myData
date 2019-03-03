module.exports = function (sequelize, DataTypes) {
    return sequelize.define('admin_login', {

        
            id: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            email:{
                type: DataTypes.INTEGER(11),
            },
            password:{
                type: DataTypes.INTEGER(11),
            }
        
         
    },
     {
        tableName: 'admin_login'
    });
}