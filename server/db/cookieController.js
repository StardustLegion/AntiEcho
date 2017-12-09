const Session = require('./sessionModel');
const cookieController = {};

cookieController.setCookie = (req,res,next) => {
  res.cookie('name',res.locals.authdata.login);
  res.cookie('avatar',res.locals.authdata.avatar); 
  next();  
}

cookieController.startSession = (req,res,next) => {
  let loginstore = {
      login: res.locals.authdata.login
  }

  let startupsess = new Session(loginstore);

  startupsess.save(function(error){
    if(error){
      console.log('error with saving session cookie');
    }else{
      next();
    }
  })
};

module.exports = cookieController;