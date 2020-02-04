import {Schema, model} from 'mongoose';
/*
    Parametros do usuario
*/
const UserSchema = new Schema({
    email: String,
    password: String,
    fave: Array
});

export default model ('User', UserSchema)