const Session = require('./sessionModel');
const sessionController = {};

sessionController.startSession = (req,res,next) => {
  //write code here
   let startupsess = new Session;
  //  console.log(req.currentUserID);

  startupsess.cookieId = String(req.login);

  startupsess.save(function(error){
    if(error){
      res.render('./../signup', {error});
    }else{
      next();
    }
  })
};

module.exports = sessionController;