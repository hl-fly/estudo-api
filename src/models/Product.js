import {Schema, model} from 'mongoose';
/*
    Parametros do produto
*/
const ProductSchema = new Schema({
    email: String,
    password: String
});

export default model ('User', UserSchema)