'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
        validate : {
          isUnique : (value,next)=>{
            Student.find({
              where : {email : value},
              attributes:['id']
            })
            .done((err,user)=>{
              if(err)
              return next('Email address already in use!');
              next();
            })
          },
            isEmail : {msg : "Email format is incorrect!"}
        }
    },
    jurusan: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Student;
};
