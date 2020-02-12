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
    } 
}