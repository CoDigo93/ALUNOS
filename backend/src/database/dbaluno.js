const mongoose = require('mongoose');
connection = mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-e4zi2.mongodb.net/alunos?retryWrites=true&w=majority', {
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
module.exports = connection