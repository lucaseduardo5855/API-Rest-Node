"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); //estamos importando apenas o router
var _TokenControllerjs = require('../controllers/TokenController.js'); var _TokenControllerjs2 = _interopRequireDefault(_TokenControllerjs); //importando o TokenController

const router = new (0, _express.Router)();

router.post('/', _TokenControllerjs2.default.store); //vamos criar um novo endpoint post para criar token

exports. default = router;
