
const UserProfileData = require('./userModel');
const userController = {};

userController.checkUser = (req,res,next) => {
  UserProfileData.findOne({login: res.locals.authdata.login}, (err, user)=>{
      if(err){
        res.send({error: "error with saving user"});
      }else if(!user){

      let user = new UserProfileData(res.locals.authdata);

      user.save(function(err){
        if(err){
          res.send({error: "error with saving user"});
        }else{
          next();
        }
      })
      }else{
        res.locals.user = user;
        next();
      }
  })
}

module.exports = userController;
