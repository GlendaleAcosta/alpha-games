var request = require('superagent');

module.exports = {
    testSuperagent: function(user){
        
        return request
            .post('/sign-up')
            .send(user)
            .set('Accept', 'application/json')
            .end(function(err, res){

                if(err) {
                    console.log(err);
                } else if (res) {
                    console.log(res);
                }
            
            });
    }
}