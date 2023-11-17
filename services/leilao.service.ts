import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const leilaoService = {
  async criarLeilao(produto: string, preco: number, dataLimite: Date, donoId: number) {
    try {
      const novoLeilao = await prisma.leilao.create({
        data: {
          produto,
          preco,
          dataLimite,
          donoId,
        },
      });
      return novoLeilao;
    } catch (error) {
      throw new Error(`Erro ao criar leilão: ${error}`);
    }
  },

  async buscarLeilaoPorId(leilaoId: number) {
    try {
      const leilao = await prisma.leilao.findUnique({
        where: {
          id: leilaoId,
        },
      });
      return leilao;
    } catch (error) {
      throw new Error(`Erro ao buscar leilão: ${error}`);
    }
  },

  async atualizarLeilao(leilaoId: number, novosDados: Partial<{ produto: string; preco: number; dataLimite: Date }>) {
    try {
      const leilaoAtualizado = await prisma.leilao.update({
        where: {
          id: leilaoId,
        },
        data: novosDados,
      });
      return leilaoAtualizado;
    } catch (error) {
      throw new Error(`Erro ao atualizar leilão: ${error}`);
    }
  },

  async deletarLeilao(leilaoId: number) {
    try {
      const leilaoDeletado = await prisma.leilao.delete({
        where: {
          id: leilaoId,
        },
      });
      return leilaoDeletado;
    } catch (error) {
      throw new Error(`Erro ao deletar leilão: ${error}`);
    }
  },
};
