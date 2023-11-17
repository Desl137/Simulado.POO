import express, { Router } from 'express';
import { leilaoController } from '../controllers/leilao.controller';

const router: Router = express.Router();

router.post('/leiloes', leilaoController.criarLeilao);

export default router;
