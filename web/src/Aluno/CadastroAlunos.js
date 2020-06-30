import React,{useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
/*import imagemViolao from '../config';*/
import logo from '../assets/logo-musica.png'
import Home from '../Home/Home'
import api from '../Services/API';

const CadastroAluno = (props) => {
  const[name, setName] = useState('');
  const[instrument, setInstrument] = useState('');
  const[coment, setComent] = useState('');
  
  async function handleCadastro(event){
    event.preventDefault();
    const data ={
      name,
      instrument,
      coment,
    }
    try{
       await api.post('/alunos',data);
      alert('Cadastro realizado com sucesso!')
    
    }catch(err){
      alert('Falha no cadastro tente novamente!');
    }

    document.getElementById('campo-nome').value =""
  document.getElementById('campo-instrumento').value ="";
  document.getElementById('exampleText').value ="";
  }

  

  return (
    <>
    <Home/>
    <div className="cadastro-conteiner">
          
          <section className="form">
            <h1>Cadastre um aluno</h1>      
            <Form onSubmit={handleCadastro} >

              <FormGroup >
                <Label for="exampleNome">Nome</Label>
                <Input type="form"  
                        name="nome" 
                        id="campo-nome" 
                        placeholder="Nome do aluno"
                        value={name}
                        onChange={event => setName(event.target.value)} />
              </FormGroup>
              
              <FormGroup>
                <Label for="instrumento">Instrumento </Label>
                <Input type="form"
                       name="instrumento"
                       id="campo-instrumento"
                       placeholder="Exemplo: cavaquinho"
                       value={instrument}
                       onChange={event => setInstrument(event.target.value)} />
              </FormGroup>
              
              <FormGroup>
                <Label for="exampleText" className="coment">Comentários</Label>
                <Input type="textarea"
                       name="text"
                       id="exampleText"
                       value={coment}
                       onChange={event => setComent(event.target.value)}  />
              </FormGroup>
                
              <Button color= "">Cadastrar</Button>
            </Form>
          </section>
          <img src={logo}className="logo" alt="Bigodeira"></img>
          
    </div>
    </>
  );
}

export default CadastroAluno;