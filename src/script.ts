import express from 'express';
import usuarioRoutes from '../routes/usuario.routes';
import leilaoRoutes from '../routes/leilao.routes';
import lanceRoutes from '../routes/lance.routes';

const app = express();

app.use(express.json());
app.use('/api', usuarioRoutes);
app.use('/api', leilaoRoutes);
app.use('/api', lanceRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
