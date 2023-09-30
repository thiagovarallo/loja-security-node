import productModel from '../models/Product.js';

class ProductController {
    static async saveProduct (req, res) {
        try {
            const newProduct = await productModel.create(req.body);

            res.status(201).json({mensagem : 'Cadastrado com sucesso', product : newProduct});
        } catch (error) {
            res.status(500).json({ mensagem: `Erro interno do servidor -- ${error}` });
        }
    }

    static async getAll (req, res) {
        try {
            const listProduct = await productModel.find();

            res.status(200).json(listProduct);
        } catch (error) {
            res.status(500).json({ mensagem: `Erro interno do servidor -- ${error}` });
        }
    }
}

export default ProductController;