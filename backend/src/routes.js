const {Router} = require('express');
const AlunoController = require('./controllers/AlunoController');

const routes = Router();

routes.get('/alunos', AlunoController.index );//usarei para listar alunos
routes.post('/alunos', AlunoController.store);//usarei para criar alunos

module.exports = routes;