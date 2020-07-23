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
        type:Date,
        required:true
        
        
    },

    description:String,
});

module.exports = mongoose.model('Aluno', AlunoSchema);