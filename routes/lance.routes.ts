import express, { Router } from 'express';
import { lanceController } from '../controllers/lance.controller';

const router: Router = express.Router();

router.post('/lances', lanceController.criarLance);

export default router;
