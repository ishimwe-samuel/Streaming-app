module.exports=(sequelize,DataTypes)=>{
    const comment=sequelize.define('comment',{
        id:{primaryKey:true,type:DataTypes.INTEGER},
        comment:DataTypes.STRING
    })
    return comment
}