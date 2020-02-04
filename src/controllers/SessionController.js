import User from '../models/User';

/*
    Criando usuario
*/
class SessionController {

    async editEmail(req, res) {
        const {}

    }

    async editPass(req, res) {
        
    }

    async store(req, res) {
        const {email} = req.body;
        const {password} = req.body;

        let user = await User.findOne({email});

        if(!user){
            let user = await User.create({email, password})
            return res.json(user);
        }

        return res.status(400).json({error: "Usuario já existente"});

    }
}

export default new SessionController();