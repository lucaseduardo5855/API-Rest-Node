import multer from 'multer';
import multerConfig from '../config/multerConfig.js';

import Foto from '../models/Foto.js';

const upload = multer(multerConfig).single('foto'); // configurando o multer com as configuracoes do multerconfig e definindo que sera um unico arquivo com o nome 'foto'

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
        const foto = await Foto.create({ originalname, filename, aluno_id }); // criando a foto no banco de dados com os nomes

        return res.json(foto); // se nao der erro, ele retorna o arquivo
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno nao existe'],
        })
      }

    });
  }
}

export default new FotoController();
