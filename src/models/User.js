import {Schema, model} from 'mongoose';
/*
    Parametros do usuario
*/
const UserSchema = new Schema({
    email: String,
    password: String
});

export default model ('User', UserSchema)