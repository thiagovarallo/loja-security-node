import express from 'express';
import usuarioController from '../controller/usuarioController.js';
import auth from '../middleware/autenticado.js';
import verifyRole from '../middleware/auth.js';

const routes = express.Router();


routes.use(auth);

routes.get('/', usuarioController.getAll);
routes.get('/:id', usuarioController.findById);
routes.post('/',verifyRole , usuarioController.saveUser);
routes.delete('/:id',verifyRole, usuarioController.deleteUser);
routes.put('/:id',verifyRole, usuarioController.updateUser);

export default routes;