import User from '../models/User';

/*
    Criando, Altera e deleta usuario
*/
class SessionController {

    async edit(req, res) {
        const {new_value} = req.params;
        const {email, password} = req.body;
        const {email_log} = req.headers;
        const {password_log} = req.headers;

        if(String(email_log) !== String(email) || String(password_log) !== String(password)) {
            return res.status(401).json({error: "Usuario invalido"});
        }

        await User.updateOne({email: new_value}, {
            password,
            email
        })

        return res.send();
    }

    async store(req, res) {
        const {email} = req.body;
        const {password} = req.body;

        let user = await User.findOne({email});
        console.log(email);
        if(!user){
            let user = await User.create({email, password})
            return res.json(user);
        }

        return res.status(400).json({error: "Usuario já existente"});

    }

    async destoy(req, res) {
        const {email, password} = req.body;
        const {email_log} = req.headers;
        const {password_log} = req.headers;

        if(String(email_log) !== String(email) || String(password_log) !== String(password)) {
            return res.status(401).json({error: "Usuario invalido"});
        }

        await User.findByIdAndDelete({email});

        return res.json({message: "Conta Exccluida com sucesso"});
    }
}

export default new SessionController();