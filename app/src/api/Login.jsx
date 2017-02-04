var request = require('superagent');

module.exports = {
    postLogin: function(user){
        
        return request
            .post('/login')
            .send(user)
            .set('Accept', 'application/json');
    }
}