import { Request, Response } from 'express';
import { lanceService } from '../services/lance.service';

export const lanceController = {
  async criarLance(req: Request, res: Response) {
    const { compradorId, leilaoId, valor } = req.body;
    try {
      const novoLance = await lanceService.criarLance(compradorId, leilaoId, valor);
      res.status(201).json(novoLance);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar lance' });
    }
  },
};
