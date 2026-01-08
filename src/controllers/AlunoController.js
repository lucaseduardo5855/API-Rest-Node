import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']], // ordenando os alunos pelo id em ordem decrescente e as fotos de cada aluno tambem em ordem decrescente
      include: {
        model: Foto,
        attributes: ['filename', 'url'],
      },
    });
    res.json(alunos);
  }

  //STORE - criar
  async store(req, res) {
    try{
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);

    }catch(e){
      return res.status(400).json({errors: e.errors.map((e) => e.message)});
    }
   } //criar um novo aluno


  //SHOW - pegar um unico aluno
  async show(req, res) { //pegar um unico aluno
    try {
      const { id } = req.params; //pegar o id dos parametros da requisicao

      if (!id) {
        return res.status(400).json({ errors: ['Faltando ID'] });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome', 'sobrenome', 'email', 'idade', 'peso', 'altura'],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']], // ordenando as fotos do aluno em ordem decrescente pelo id
        include: {
          model: Foto,
          attributes: ['filename', 'url'],
        },
      }); //procurar o aluno pelo id

      if(!aluno) {
        return res.status(400).json({errors: ['Aluno não existe']});
      }
      return res.json(aluno); //retornar o aluno encontrado

    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((e) => e.message) });
    }
  }

  //DELETE
  async delete(req, res) {try {
      const { id } = req.params; //pegar o id dos parametros da requisicao

      if (!id) {
        return res.status(400).json({ errors: ['Faltando ID'] });
      }

      const aluno = await Aluno.findByPk(id); //procurar o aluno pelo id

      if(!aluno) {
        return res.status(400).json({errors: ['Aluno não existe']});
      }
      await aluno.destroy();
      return res.json({msg: 'Aluno deletado com sucesso'});

    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((e) => e.message) });
    } } //deletar um aluno


    //UPDATE
  async update(req, res) { try {
      const { id } = req.params; //pegar o id dos parametros da requisicao

      if (!id) {
        return res.status(400).json({ errors: ['Faltando ID'] });
      }

      const aluno = await Aluno.findByPk(id); //procurar o aluno pelo id

      if(!aluno) {
        return res.status(400).json({errors: ['Aluno não existe']});
      }

      const alunoAtualizado = await aluno.update(req.body); //atualizar o aluno com os dados do corpo da req
      return res.json(alunoAtualizado);


    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((e) => e.message) });
    }} //atualizar um aluno

}

export default new AlunoController();
