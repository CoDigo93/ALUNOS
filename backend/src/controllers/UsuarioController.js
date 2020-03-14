Usuario = require('../models/Usuario');

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
}
}