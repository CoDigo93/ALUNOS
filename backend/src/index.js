const express = require('express');
const routes = require('./routes');


const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-e4zi2.mongodb.net/alunos?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

mongoose.connection.on('connected', function(){
    console.log('Conectado ao banco de dados!');
});

mongoose.connection.on('error', function(err){
    console.log(`Ocorreu um erro:${err}`); 
});
mongoose.connection.on('disconnected', function(){
    console.log(`Conexão Finalizada com o MongoDB:`);
});

app.use(express.json());

app.use(routes);

/*app.post('/', (request,response)=>{
    console.log(request.body);
    return response.json(request.body);
});
*/
app.listen(3000, () =>{
    console.log('servidor rodando!');
});

/*app.get('/', (request,response) =>{
    response.send('Essa é a primeira rota criada com o express!');
});*/