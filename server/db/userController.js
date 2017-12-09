const Sources = require('./../../sources');
const UserProfileData = require('./userModel');
const userController = {};

userController.checkUser = (req,res,next) => {
  UserProfileData.findOne({login: res.locals.authdata.login}, (err, user)=>{
      if(err){
        res.send({error: "error with saving user"});
      }else if(!user){
        let user = new UserProfileData(res.locals.authdata);
        user.preferences = {};
        for(var key in Sources){
          user.preferences[key] = false;
        }
        console.log(user.preferences);
        user.save(function(err){
        if(err){
          res.send({error: "error with saving user"});
        }else{
          next();
        }
      })
      }else{
        let profileNewsSources = Object.keys(user.preferences);
        res.locals.user = user;
        for(var key in Sources){
          if (profileNewsSources.includes(key)!==true){
            user.preferences[key] = false;
          }
        }
        next();
      }
  })
}

/// arbitrary changessssss


userController.updatePreferences = (req,res,next) => {
   let allNewsSources = Object.keys(Sources);
    res.locals.user = user;
    UserProfileData.findOne({login: res.locals.authdata.login}, (err, user)=>{
      if(err){
        res.send({error: "error with finding user profile"});
      }else{
        

      }



}

module.exports = userController;
