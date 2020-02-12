const mongoose = require('mongoose');

const AlunoSchema = mongoose.Schema({
    name:String,
    instrument:String,
});

module.exports = mongoose.model('Aluno', AlunoSchema);