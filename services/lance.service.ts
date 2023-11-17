import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const lanceService = {
  async criarLance(compradorId: number, leilaoId: number, valor: number) {
    try {
      const novoLance = await prisma.lance.create({
        data: {
          compradorId,
          leilaoId,
          valor,
        },
      });
      return novoLance;
    } catch (error) {
      throw new Error(`Erro ao criar lance: ${error}`);
    }
  },

  async buscarLancesPorLeilaoId(leilaoId: number) {
    try {
      const lances = await prisma.lance.findMany({
        where: {
          leilaoId,
        },
      });
      return lances;
    } catch (error) {
      throw new Error(`Erro ao buscar lances: ${error}`);
    }
  },
};
