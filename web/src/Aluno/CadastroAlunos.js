import React,{useState} from 'react';
import DatePicker, {registerLocale} from 'react-datepicker';
import ptbr from 'date-fns/locale/pt-br';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import logo from '../assets/logo-musica.png'
import Home from '../Home/Home'
import api from '../Services/API';

registerLocale('pt-br', ptbr);



const CadastroAluno = (props) => {

  const[name, setName] = useState('');
  const[instrument, setInstrument] = useState('');
  const[description, setDescription] = useState('');
  const[aula, setAula] = useState(null);
  


  async function handleCadastro(event){
    event.preventDefault();
    
    const data ={
      name,
      instrument,
      aula
     
    }
    
    try{
      
      
      console.log(data);
      await api.post('/alunos',data);
      alert('Cadastro realizado com sucesso!')
    
    }catch(err){
      alert('Falha no cadastro tente novamente!');
    }

    document.getElementById('campo-nome').value =""
    document.getElementById('campo-instrumento').value ="";
    document.getElementById('exampleText').value ="";
    document.getElementById('datepicker').value="";
  }

  

  return (
    <>
    <Home/>
    <div className="cadastro-conteiner">
          
          <section className="cad-form">
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
              <Label for="Horario" className="coment">Data/Horário da aula</Label>
              <DatePicker id="datepicker"
                      selected={aula}
                      onChange={date => setAula(date)} 
                      showTimeSelect
                      placeholderText='Selecione a data'
                      dateFormat="dd/MM/yyyy - HH:mm"  
                      locale = 'pt-br'
                      minDate={new Date()}
                      
                      
                  />
                  
              </FormGroup>
              <FormGroup>
                <Label for="exampleText" className="coment">Comentários</Label>
                <Input type="textarea"
                       name="text"
                       id="exampleText"
                       value={description}
                       onChange={event => setDescription(event.target.value)}  />
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