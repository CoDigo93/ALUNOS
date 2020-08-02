const mongoose = require('mongoose');

const AulaSchema = mongoose.Schema({
    aula:{
        type:Date,
        required:true,
          
    },


    

   
});

module.exports = mongoose.model('Aula',AulaSchema);