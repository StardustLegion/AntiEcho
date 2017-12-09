const sessionController = require('./sessionController');

const cookieController = {};
cookieController.setSSIDCookie = setSSIDCookie;

function setSSIDCookie(req, res, next) {
  // let person = req.currentUserID;
  // console.log(person)

  res.cookie('ssid', String(req.login), {httpOnly: true});
  next();  
}

module.exports = cookieController;