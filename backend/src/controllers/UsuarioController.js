const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');

module.exports = {
    async register(request,response){
        try{
        const {login, password} = request.body;
        if(await Usuario.findOne({login}))
           return response.status(400).send({error: 'Esse usuário já existe'});
        
        const usuario = await Usuario.create({
                
            login,
            password,
        });

            return response.json(usuario);
        
    }catch(err){
        
        err = response.status(400).send({error: 'Falha ao registrar usuário'});
        console.log('Falha ao registrar usuário');
        return err; 
    }
},

async authenticate(request,response){
    try{    
        const {login, password} = request.body;
        const user = await Usuario.findOne({login}).select('+password');
            
        if(!user)
            return response.status(404).send({error: 'Usuário não encontrado'});
        
       if(! await bcrypt.compare(password, user.password))
            return response.status(404).send({error: 'Password inválido'});
        
        user.password = undefined;
        
        return response.json(user);
    
    }catch(err){
        err = response.status(400).send({error: 'Falha ao encontrar usuário'});
        console.log('falha ao encontrar usuário');
        return err;
    }

    }
}
