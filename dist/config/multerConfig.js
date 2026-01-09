"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer); // multer serve para fazer upload de arquivos
var _path = require('path'); // extname pega a extensao do arquivo, resolve serve para resolver caminhos

const aleatorio = () => Math.floor(Math.random() * 10000 + 20000); // funcao que gera um numero aleatorio

exports. default = {
  fileFilter: (req, file, cb) => {
    if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg'){ //mimetype verifica o tipo do arquivo
      return cb(new _multer2.default.MulterError('Arquivo invalido. Apenas PNG e JPEG são aceitos.'));
    }else{
      return cb(null, true);
    }
  },
  storage: _multer2.default.diskStorage({
    destination: (req, file, cb) => {
      cb(null, _path.resolve.call(void 0, __dirname, '..', '..', 'uploads', 'imagens')) // caminho onde o arquivo sera salvo;
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()} ${_path.extname.call(void 0, file.originalname)}`)
    }
  })
};
