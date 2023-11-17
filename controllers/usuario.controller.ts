import { Request, Response } from 'express';
import { usuarioService } from '../services/usuario.service';

export const usuarioController = {
  async criarUsuario(req: Request, res: Response) {
    const { nome, email } = req.body;
    try {
      const novoUsuario = await usuarioService.criarUsuario(nome, email);
      res.status(201).json(novoUsuario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  },
};
