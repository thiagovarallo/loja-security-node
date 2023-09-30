import express from 'express';
import ProductController from '../controller/productController.js'

const routes = express.Router();

routes.post('/',ProductController.saveProduct);
routes.get('/', ProductController.getAll)

export default routes;