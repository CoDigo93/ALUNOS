const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

function tokenGenerator(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400, //expira em 1 dia
    });

}

module.exports = {

    async register(request,response){
        try{
        const {login, password} = request.body;
        if(await Usuario.findOne({login}))
           return response.status(400).send({error: 'Esse usuário já existe'});
        
        const user = await Usuario.create({
                
            login,
            password,
        });

            user.password = undefined;
            const token = tokenGenerator({id:user.id});
            
            return response.send({user, token});
        
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

        const token = tokenGenerator({id:user.id});
        
        return response.send({user, token});
    
    }catch(err){
        err = response.status(400).send({error: 'Falha ao encontrar usuário'});
        console.log('falha ao encontrar usuário');
        return err;
    }

    }
}
