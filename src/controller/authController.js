import usuarioModel from '../models/Usuario.js'
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import jsonScret from '../config/jsonSecret.js';

const { sign } = jwt

class authController {
    static async login (req, res) {
        const {email, senha} = req.body;

        try {
            const login = await usuarioModel.findOne({email : email});

            if (login == null) {
                res.status(404).json({mensagem : "usuario não encontrado"});
            } 

            const senhasIguais = await compare(senha, login.senha);

            if (!senhasIguais) {
                return res.status(404).json({mensagem : "senha incorreta"});
            }

            const accessToken = sign({
                id: login._id,
                email: login.email,
                role: login.role
            },jsonScret, {
                expiresIn: 86400
            })

            res.json({accessToken, login})
        } catch (error) {
            res.status(500).json({ mensagem: `Erro interno do servidor -- ${error}`});
        }      
    }
}

export default authController;