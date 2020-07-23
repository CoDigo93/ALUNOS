const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const database = require('./database/dbaluno');



const app = express();
app.use(cors());


app.use(express.json());


require('./controllers/AuthController')(app);
app.use(routes)


app.listen(3333, () =>{
    console.log('servidor rodando!');
});

