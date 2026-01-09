"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfigjs = require('../config/multerConfig.js'); var _multerConfigjs2 = _interopRequireDefault(_multerConfigjs);

var _Fotojs = require('../models/Foto.js'); var _Fotojs2 = _interopRequireDefault(_Fotojs);

const upload = _multer2.default.call(void 0, _multerConfigjs2.default).single('foto'); // configurando o multer com as configuracoes do multerconfig e definindo que sera um unico arquivo com o nome 'foto'

class FotoController {
  store(req, res) {
    return upload(req, res, async (e) => { // se essa variavel der erro, ele cai no if
      if (e) {
        return res.status(400).json({
          errors: [e.code],
        });
      }

      try {
        const { originalname, filename } = req.file; // pegando o nome original e o nome do arquivo salvo do req.file insomnia
        const { aluno_id } = req.body; // pegando o id do aluno do corpo da requisicao
        const foto = await _Fotojs2.default.create({ originalname, filename, aluno_id }); // criando a foto no banco de dados com os nomes

        return res.json(foto); // se nao der erro, ele retorna o arquivo
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno nao existe'],
        })
      }

    });
  }
}

exports. default = new FotoController();
