import multer from 'multer'; // multer serve para fazer upload de arquivos
import { extname, resolve} from 'path'; // extname pega a extensao do arquivo, resolve serve para resolver caminhos

const aleatorio = () => Math.floor(Math.random() * 10000 + 20000); // funcao que gera um numero aleatorio

export default {
  fileFilter: (req, file, cb) => {
    if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg'){ //mimetype verifica o tipo do arquivo
      return cb(new multer.MulterError('Arquivo invalido. Apenas PNG e JPEG são aceitos.'));
    }else{
      return cb(null, true);
    }
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${aleatorio()} ${extname(file.originalname)}`)
    }
  })
};
