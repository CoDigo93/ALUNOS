Aluno = require('../models/Aluno');

module.exports = {
    async index(request, response){
        const alunos = await Aluno.findOne(request.query);
        return response.json(alunos);
    },

    async store(request, response){
        const {name, instrument} = request.body;
        
        let aluno = await Aluno.findOne({name});
        
        if(!aluno){
            alunos = await Aluno.create({
               
                name,
                instrument,
            })
            
            return response.json(alunos);
        }
    }, 

    async delete(request,response){
        const delaluno = await Aluno.deleteMany(request.params);
        console.log(request.params);
        console.log(delaluno);
        return response.json(delaluno);
        
    },

    async update(request,response){
        
        console.log(request.body);

        const upAluno = await Aluno.findByIdAndUpdate(request.params._id,
            {$set:{name:request.body.name,
                   instrument:request.body.instrument}},{
                    
                    new:true,
                    useFindAndModify:false
        
        });
            
        console.log(upAluno);
        return response.json(upAluno);
    }
}