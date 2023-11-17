import express, { Router } from 'express';
import { usuarioController } from '../controllers/usuario.controller';

const router: Router = express.Router();

router.post('/usuarios', usuarioController.criarUsuario);

export default router;
