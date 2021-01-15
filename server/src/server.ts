import express from 'express';
import routes from './routes';
import cors from 'cors';

// Criação da API
const app = express();
app.use(cors());

// Limite: 20MB
app.use(express.urlencoded({limit: '20mb', extended: true}))
app.use(express.json({limit: '20mb'}));

// Liga as rotas
app.use(routes);

// Porta
app.listen(3333);
