import dotenv from "dotenv";
import { resolve } from "path";
dotenv.config();

import "./database/index.js";
import cors from "cors";
import helmet from "helmet";

import express from "express";
import homeRoutes from "./routes/homeRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import tokenRoutes from "./routes/tokenRoutes.js";
import alunosRoutes from "./routes/alunoRoutes.js";
import fotoRoutes from "./routes/fotoRoutes.js";

const whiteList = ["https://react2.34.72.34.75", "http://localhost:3000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

class App {
  constructor() {
    this.app = express(); //Servidor Express
    this.middlewares();
    this.routes(); //Função de rotas
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true })); //Permite dados enviado por formularios HTML
    this.app.use(express.json()); //Permite que dados enviados em JSON sejam interpretados
    this.app.use(express.static(resolve(__dirname, "..", "uploads"))); //Define a pasta "uploads" como estatica para acesso externo
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users", userRoutes);
    this.app.use("/tokens", tokenRoutes);
    this.app.use("/alunos", alunosRoutes);
    this.app.use("/fotos", fotoRoutes);
  }
}

export default new App().app;
