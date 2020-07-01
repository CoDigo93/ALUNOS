const Aluno = require('../models/Aluno');



module.exports = {
    async index(request, response){
        const alunos = await Aluno.find();
        if(!alunos) return response.status(400).send('Não foi encontrado nenhum aluno.');

        return response.json(alunos);
    },

    async store(request, response){
        try{
        const {name, instrument} = request.body;
        
        let aluno = await Aluno.findOne({name});
        
        if(!aluno){
            alunos = await Aluno.create({
               
                name,
                instrument,
            })
            
            return response.json(alunos);
        }
            
        }catch(err){
            return response.status(400).send('Erro na criação, tente novamente!');
        }
    }, 

    async delete(request,response){
        const delaluno = await Aluno.deleteMany(request.params);
        if(!delaluno) return response.status(400).send('Não foi encontrado registros com esse id!');

        console.log(request.params);
        console.log(delaluno);
        return response.json(delaluno);
        
    },

    async update(request,response){
        
        console.log(request.body);
        try{

        const upAluno = await Aluno.findByIdAndUpdate(request.params._id,
            {$set:{name:request.body.name,
                   instrument:request.body.instrument}},{
                    
                    new:true,
                    useFindAndModify:false
        
        });
        
        console.log(upAluno);
        return response.json(upAluno);
    }catch(err){
        return response.status(400).send('Não foi possível atualizar o registro,tente novamente!');
    }
    },

    async parcialUpdate(request,response){
        console.log('chamando a parcialUpdate');
        try{
        const aluno = await Aluno.findByIdAndUpdate(request.params._id, request.body, {
            new:true,
            useFindAndModify: false
        });
        
        
        if(!aluno) return response.status(400).send('aluno não encontrado!');
        console.log(aluno);

         return response.json(aluno);
    }catch(err){
        return response.status(400).send('Não foi possível atualizar o registro,tente novamente!');
    }
        /*
        

        let query = {$set:{}};
        for(let i in request.body ){
            //se nesse índice existe alg propriedade dentro desse objeto e ela for diferente da que vem na requisição, faz o update.
            if(aluno[i] && aluno[i] !== request.body[i])
                query.$set[i] = request.body[i];
            

           const updtAluno = await Aluno.updateOne({_id:request.params._id}, query);
            return response.send(aluno);     
        */
        }

        


    }
