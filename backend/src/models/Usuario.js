const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');//biblioteca para incriptação de senhas

var UsuarioSchema = mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,//quando for buscar no banco de dados o password não será exibido
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
    
    
});
    //incripta o password antes de salvar o registro no banco
    UsuarioSchema.pre('save', async function(next){
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;

        next();
    });

module.exports = mongoose.model('Usuario',UsuarioSchema);