var request = require('superagent');

module.exports = {
    postSignUp: function(user){
        
        return request
            .post('/sign-up')
            .send(user)
            .set('Accept', 'application/json');
    }
}