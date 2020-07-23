const mongoose = require('mongoose');

const AulaSchema = mongoose.Schema({
    aula:{
        type:String,
        required:true,
          
    },


    

   
});

module.exports = mongoose.model('Aula',AulaSchema);