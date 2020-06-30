import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import logo from '../assets/logo-musica.png';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';
import api from '../Services/API';

export default function Register(){
const [login,setLogin] = useState('');
const [password,setPassword] = useState('');
const history = useHistory();

async function handleRegister(event){
    event.preventDefault();
    
    const data = { 
        login, 
        password, 
    };

    try {
        const response = await api.post('/usuarios', data);
        alert(`cadastro realizado com sucesso!${response.data}`);

        history.push('/');
    }
    catch(err){
        alert('erro no cadastro,tente novamente!');
    }

}

    return(
    <>
    <div className="register-conteiner">
        
        <div className="h1-form">
           <section className="rg-logo"> <h1 className="regH1">Faça seu registro!</h1> <img src={logo} className="rg-logo" alt="Bigodeira"></img></section>
                <div className="rg-form">
                    
                    <Form onSubmit={handleRegister}>
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
                                    value= {password}
                                    onChange={event => setPassword(event.target.value)} />
                        </FormGroup>
                        <Button color= "">Registrar</Button>
                    </Form>
                    
                </div>
        </div>
       
    
    </div>
    </>
    );
}