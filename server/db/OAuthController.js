
const request = require('request');
const OAuthController = {};

OAuthController.authProcess = (req,res,next) => {
    request.post(`https://github.com/login/oauth/access_token?client_id=${process.env.OAUTH_ID}&client_secret=${process.env.OAUTH_SECRET}&code=${req.query.code}&accept=json`, 
    (error, response, body) => {
        //convert authorization token for use
        const authToken = body.split('&')[0].split('=')[1];
        //create container for new request with the authorization token attached
        const options = {
        url: `https://api.github.com/user?access_token=${authToken}`,
        headers: { 'User-Agent': 'didrio' }
        };
        //make request to GitHub OAuth 
        request.get(options, (error, response, body) => {
        const OAuthData = JSON.parse(body);
        res.locals.authdata = {
         login: OAuthData.login,
         avatar: OAuthData.avatar,
         email: OAuthData.email
        };
        next();
        })
    })
};

module.exports = OAuthController;