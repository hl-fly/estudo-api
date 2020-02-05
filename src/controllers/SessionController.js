import User from '../models/User';
import * as Yup from 'yup';

/*
    Criando, Altera e deleta usuario
*/
class SessionController {

    async edit(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
        });

        const {email, password} = req.body;
        const {email_log} = req.headers;
        const {password_log} = req.headers;

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({error: "Body invalido"});
        }

        let userJson = await User.findOne({email: email_log});

        if(!user) { return res.status(400).json({error: "Usuario usuario não existente"}); }

        if(String(email_log) !== String(userJson.email) || String(password_log) !== String(userJson.password)) {
            return res.status(401).json({error: "Usuario invalido"});
        }

        await User.updateOne({email: email_log}, {
            password,
            email
        })

        return res.send();
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
        });

        const {email} = req.body;
        const {password} = req.body;

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({error: "Body invalido"});
        }

        let user = await User.findOne({email});
        console.log(email);
        if(!user){
            let user = await User.create({email, password});
            return res.json(user);
        }

        return res.status(400).json({error: "Usuario já existente"});

    }

    async destoy(req, res) {
        const {email_log} = req.headers;
        const {password_log} = req.headers;
        // const {email} = req.body;

      
        let user = await User.findOne({email: email_log});

        if(!user) { return res.status(400).json({error: "Usuario usuario não existente"}); }

        if(String(email_log) !== String(user.email) || String(password_log) !== String(user.password)) {
            return res.status(401).json({error: "Usuario invalido"});
        }

        await User.findByIdAndDelete(user._id);

        return res.json({message: "Conta Exccluida com sucesso"});
    }
}

export default new SessionController();