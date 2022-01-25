module.exports=(sequelize,DataTypes)=>{
 const video=sequelize.define('video',{
     id:{type:DataTypes.INTEGER,primaryKey:true}
 })   
 return video
}
