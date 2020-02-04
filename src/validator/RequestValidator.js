import request from 'request';

class RequestValidator {
    request(id) {
       request(`http://challenge-api.luizalabs.com/api/product/${id}`, (err, res, body) => {
           
            if(err) {
                return res.statusCode
            }

           return body;
       })
    }
   
}

export default new RequestValidator();