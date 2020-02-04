import User from '../models/User';
import RequestValidator from '../validator/RequestValidator'

class FaveController {
    async edit(req, res) {
        const {email_log} = req.headers;
        const {password_log} = req.headers;
        const {email} = req.body;
        const {id} = req.params;

        let user = await User.findOne({email});

        if(!user) {
            return res.status(400).json({error: "Usuario usuario não existente"});
        }
        if(String(email_log) !== String(email) || String(password_log) !== String(user.password)) {
            return res.status(401).json({error: "Usuario invalido"});
        }

        return res.json({message: "Conta Exccluida com sucesso"});
        
    }
}

export default new FaveController();