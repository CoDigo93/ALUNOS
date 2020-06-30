import React ,{useState} from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Leaves from '../background/Leaves';
import {Link,useHistory} from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../Services/API';



export default function Login(props) {
  
  const[login,setLogin] = useState('');
  const[password,setPassword] = useState('');
  
  const history = useHistory();
  
  async function handleLogin(event){
    event.preventDefault();
  
      const data = {
        login,
        password,
      }
  
      try{
        const response = await api.post('/autenticar',data);
        
        console.log(response.data.user);
        console.log(response.data.token);

        localStorage.setItem('login',response.data.user.login);
        localStorage.setItem('UserID',response.data.user._id);
        localStorage.setItem('token',response.data.token);
        
        history.push('/home');

        
        }catch(err){
          
          alert('falha no login!Tente novamente.');
          
    }
  }

        

  return (
    <>
     <Leaves />
    <div className="login-form">
      
      <h1 className="">Faça o login</h1>
      <Form onSubmit={handleLogin} className="form">
        <FormGroup>
            <Label for="user">Usuário</Label>
            <Input type="form"
                    name="user"
                    id="user"
                    placeholder="escolha um usuário"
                    value={login}
                    onChange={event => setLogin(event.target.value)} />
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">Senha</Label>
            <Input type="password"
                   name="password"
                   id="examplePassword"
                   placeholder="escolha uma senha"
                   value={password}
                   onChange={event => setPassword(event.target.value)} />
        </FormGroup>
        <div className="assign">
        <Button color= "">Entrar</Button>
        <Link className="link" to="../Register/Register"><FiLogIn/>Não sou registrado!</Link>
        </div>
    </Form>
    
  </div>
  
  </>
  );
};
