import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
    id : {type: mongoose.Schema.Types.UUID},
    nome  : {type : String, required: true},
    email : {type : String, required: true},
    senha : {type : String, required: true},
    role : {type : Number, default: '0'}
}, {versionKey: false});

const usuario = mongoose.model('usuario', usuarioSchema);

export default usuario;