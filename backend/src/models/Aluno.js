const mongoose = require('mongoose');

const AlunoSchema = mongoose.Schema({
    name:{
        type:String,
        required:true    
    },
    
    instrument:{
        type:String,
        required:true
    },

    aula:{
        type:Date
        
       
    },

    description:String,
});

module.exports = mongoose.model('Aluno', AlunoSchema);