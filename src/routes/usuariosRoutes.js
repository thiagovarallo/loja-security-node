import express from 'express';
import usuarioController from '../controller/usuarioController.js';

const routes = express.Router();


routes.get('/', usuarioController.getAll);
routes.get('/:id', usuarioController.findById);
routes.post('/', usuarioController.saveUser);
routes.delete('/:id', usuarioController.deleteUser);
routes.put('/:id', usuarioController.updateUser);

export default routes;