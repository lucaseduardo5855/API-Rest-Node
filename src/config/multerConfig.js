import multer from "multer";
import { extname, resolve} from 'path';

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000); //vai retornar valor aleatorio de 10mil a 20mil

export default {
  fileFilter: (req, file, cb) => {
    if(file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));//caminho onde vai guardar
    },
    filename: (req, file, cb) => { //"RG" único do arquivo para evitar que uma foto sobrescreva a outra.
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`); //foto q chama a data + a extesão do arquivo (ex: jpg) ex> Algo como 17098234_15402.png.
    },
  }),
};
