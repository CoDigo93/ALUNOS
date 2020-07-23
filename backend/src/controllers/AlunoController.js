const Aluno = require('../models/Aluno');



module.exports = {
    async index(request, response){
        const alunos = await Aluno.find();
        if(!alunos) return response.status(400).send('No student found.');

        return response.json(alunos);
    },

    async store(request, response){
        try{
        const {name, instrument, aula, description} = request.body;
        
        let aluno = await Aluno.findOne({name});
        
        if(!aluno){
            alunos = await Aluno.create({
               
                name,
                instrument,
                aula,
                description
            });
            
            return response.json(alunos);
        }
            
        }catch(err){
            return response.status(400).send('Creation error, try again!');
        }
    }, 

    async delete(request,response){
        const delaluno = await Aluno.deleteMany(request.params);
        if(!delaluno) return response.status(400).send('No records found with this id!');

        console.log(request.params);
        console.log(delaluno);
        return response.json(delaluno);
        
    },

    async update(request,response){
        
        console.log(request.body);
        try{

        const upAluno = await Aluno.findByIdAndUpdate(request.params._id,
            {$set:{name:request.body.name,
                   instrument:request.body.instrument,
                   aula:request.body.aula,
                   description:request.body.description}},{
                    
                    new:true,
                    useFindAndModify:false
        
        });
        
        console.log(upAluno);
        return response.json(upAluno);
    }catch(err){
        return response.status(400).send('The record could not be updated, please try again!');
    }
    },

    async parcialUpdate(request,response){
        console.log('chamando a parcialUpdate');
        try{
        const aluno = await Aluno.findByIdAndUpdate(request.params._id, request.body, {
            new:true,
            useFindAndModify: false
        });
        
        
        if(!aluno) return response.status(400).send('Student not found!');
        console.log(aluno);

         return response.json(aluno);
    }catch(err){
        return response.status(400).send('The record could not be updated, please try again!');
    }
        
        
    }
        


}
