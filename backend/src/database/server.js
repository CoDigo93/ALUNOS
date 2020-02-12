/*const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb://localhost/testaluno', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

mongoose.connection.on('connected', function(){
    console.log('Conectado ao banco de dados!');
});

mongoose.connection.on('error', function(err){
    console.log(`Ocorreu um erro:${err}`); 
});
mongoose.connection.on('disconnected', function(err){
    console.log(`Conexão Finalizada:${err}`);
});

module.exports = connect*/