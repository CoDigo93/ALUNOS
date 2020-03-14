const {Router} = require('express');
const AlunoController = require('./controllers/AlunoController');
const UsuarioController = require('./controllers/UsuarioController');

const routes = Router();

//<<<<<<<<<<<ROTAS DE ALUNOS>>>>>>>>

routes.get('/alunos', AlunoController.index );//usarei para listar alunos
routes.post('/alunos', AlunoController.store);//usarei para criar alunos
routes.delete('/alunos/:_id', AlunoController.delete);
routes.put('/alunos/:_id', AlunoController.update);

//<<<<<<<<<<<ROTAS DE USUÁRIOS>>>>>>>>>>>>

routes.post('/usuarios', UsuarioController.register);

module.exports = routes;