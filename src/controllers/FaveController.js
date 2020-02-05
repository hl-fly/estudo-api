import User from '../models/User';
import request from 'request';
import * as Yup from 'yup';

class FaveController {

    async edit(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
        });

        const {email_log} = req.headers;
        const {password_log} = req.headers;
        const {email} = req.body;
        const {id} = req.params;

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({error: "Body invalido"});
        }

        let user = await User.findOne({email});

        if(!user) { return res.status(400).json({error: "Usuario usuario não existente"}); }

        if(String(email_log) !== String(user.email) || String(password_log) !== String(user.password)) {
            return res.status(401).json({error: "Usuario invalido"});
        }
        
        request(`http://challenge-api.luizalabs.com/api/product/${id}`,{json: true} , async (err, resp, body) => {
            if(String(resp.statusCode) == "404") { 
                return  res.status(404).json({error: "Item não existente"}); 
            }
            for (let i = 0; i < user.fave.length; i++) {
                if(String(user.fave[i].id) === String(id)) {
                    return res.status(401).json({error: "Item já favoritado"});
                }
            }

            const allFave = user.fave;
            allFave[user.fave.length] = body; 

            await User.updateOne({email}, {
                fave: allFave
            });

            console.log(body);
            return res.json(user.fave);
       })
        
    }

    async show(req, res) {

        const {email_log} = req.headers;
        const {password_log} = req.headers;
        const {email} = req.params;

      
        let user = await User.findOne({email});

        if(!user) { return res.status(400).json({error: "Usuario usuario não existente"}); }

        if(String(email_log) !== String(user.email) || String(password_log) !== String(user.password)) {
            return res.status(401).json({error: "Usuario invalido"});
        }
        
        return res.json(user.fave);
    }
    
}

export default new FaveController();