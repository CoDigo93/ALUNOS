const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const database = require('./database/dbaluno');



const app = express();
app.use(cors());
/*
app.use((request, response, next) =>{
    console.log("acessou o middleware");
    
    app.use(cors());
    next();
});
*/

app.use(express.json());


require('./controllers/projectController')(app);
app.use(routes);
/*app.post('/', (request,response)=>{
    console.log(request.body);
    return response.json(request.body);
});
*/
app.listen(3333, () =>{
    console.log('servidor rodando!');
});

/*app.get('/', (request,response) =>{
    response.send('Essa é a primeira rota criada com o express!');
});*/