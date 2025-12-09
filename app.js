import dotenv from 'dotenv';
dotenv.config();

import './src/database/index.js';

import express from 'express';
import homeRoutes from './src/routes/homeRoutes.js';
import userRoutes from './src/routes/userRoutes.js';

class App {
  constructor() {
    this.app = express(); //Servidor Express
    this.middlewares();
    this.routes(); //Função de rotas
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true })); //Permite dados enviado por formularios HTML
    this.app.use(express.json()); //Permite que dados enviados em JSON sejam interpretados
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
  }
}

export default new App().app;
