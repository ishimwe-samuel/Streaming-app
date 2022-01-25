module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        username: {type:DataTypes.STRING,unique:true},
    })
    return user
}