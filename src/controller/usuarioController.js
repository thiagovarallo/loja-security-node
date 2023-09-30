import usuarioModel from  '../models/Usuario.js';
import { hash } from 'bcrypt';

class usuarioController {
    static async getAll (req, res) {
        let all = await usuarioModel.find()

        res.json(all);
    }

    static async findById (req, res) {
        try {
            const id = req.params.id;
            let userId = await usuarioModel.findById(id);
            if (!userId) {
                // Usuário não encontrado
                return res.status(404).json({ mensagem: "Usuário não encontrado" });
            }
            res.json(userId).status(200);
        } catch (error) {
            res.status(500).json({ mensagem: "Erro interno do servidor" });
        }
    }

    static async saveUser (req,res) {
        
        const senhaHash = await hash(req.body.senha, 8);
        
        try {

            const newUser = await usuarioModel.create({
                nome : req.body.nome,
                email: req.body.email,
                senha: senhaHash,
                role : req.body.role
            });
            
            res.status(201).json({mensagem : "criado com sucesso", user: newUser});
        } catch (error) {
            res.status(500).json({ mensagem: `Erro interno do servidor -- ${error}`});
        }      
    }

    static async updateUser (req, res) {
        try {
            const id = req.params.id;

            const updateUser = await usuarioModel.findByIdAndUpdate(id, req.body);

            if (updateUser == null) {
                return res.status(404).json({mensagem : "usuario não encontrado"})
            }

            res.status(200).json({mensagem : "usuario alterado com sucesso"});

        } catch (error) {
            res.status(500).json({ mensagem: "Erro interno do servidor" });
        }     
    }

    static async deleteUser (req, res) {
        try {
            const id = req.params.id;

            let removeUser = await usuarioModel.findByIdAndDelete(id);

            if (removeUser  == null) {
               return res.status(404).json({mensagem : "usuario não encontrado"});
            }

            res.status(200).json({mensagem : "usuario removido com sucesso"})
        } catch (error) {
            res.status(500).json({ mensagem: "Erro interno do servidor" });
        }      
    }
}

export default usuarioController;