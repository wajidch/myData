module.exports = function (sequelize, DataTypes) {
    return sequelize.define('notification', {


        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        notification: {
            type: DataTypes.STRING(500)
        },
        date: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        },


    },
        {
            tableName: 'notification'
        });
}