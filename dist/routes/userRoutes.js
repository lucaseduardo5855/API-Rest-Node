"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserControllerjs = require('../controllers/UserController.js'); var _UserControllerjs2 = _interopRequireDefault(_UserControllerjs);
var _loginRequiredjs = require('../middlewares/loginRequired.js'); var _loginRequiredjs2 = _interopRequireDefault(_loginRequiredjs);

const router = new (0, _express.Router)();

//Não deveria existir
//router.get('/', userController.index); //lista todos os usuarios
//router.get('/:id',  userController.show); //mostra um usuario

router.post('/', _loginRequiredjs2.default, _UserControllerjs2.default.store);//cria usuario
router.put('/', _loginRequiredjs2.default, _UserControllerjs2.default.update);//atualiza usuario
router.delete('/', _loginRequiredjs2.default, _UserControllerjs2.default.delete);//deleta usuario

exports. default = router;
