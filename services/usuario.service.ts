import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const usuarioService = {
  async criarUsuario(nome: string, email: string) {
    try {
      const novoUsuario = await prisma.usuario.create({
        data: {
          nome,
          email,
        },
      });
      return novoUsuario;
    } catch (error) {
      throw new Error(`Erro ao criar usuário: ${error}`);
    }
  },
};
