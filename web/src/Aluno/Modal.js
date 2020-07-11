import React,{useState} from 'react';
import Alunos from './Alunos';
import {FormGroup,Input,Button} from 'reactstrap';
import {FiXSquare} from 'react-icons/fi';
import{Link,useHistory} from 'react-router-dom';
import api from '../Services/API';

const alunoId = localStorage.getItem('alunoId');

 

export default function Modal(){
   const[name,setName] = useState('');
   const[instrument,setInstrument] = useState('');
   
   const history = useHistory();

  
       
       async function editAluno(event){
              
              const data = {
                  name,
                  instrument,
                     
              };

              try{
              await api.patch(`alunos/${alunoId}`,data);
              
              history.push('/alunos');
              }catch(err){
              alert('Erro ao atualizar aluno,tente novamente!');
              }
       }

    return(
        <>
        
        <div className="mod">
             <Link className="modal-back" to="/alunos"><FiXSquare/></Link> 
             <h1>{"Atualize o cadastro!"}</h1>
             <FormGroup  className="form-modal">
                <Input id="form-edit"
                       type="form"
                       placeholder="Digite o nome do aluno"
                       value={name}
                       onChange={event => setName(event.target.value)}
                    
                />
                <Input id="form-edit"
                       type="form"
                       placeholder="Digite o instrumento"
                       value={instrument}
                       onChange={event => setInstrument(event.target.value)}     
                />
                <Input id="form-edit"
                       type="textarea"
                       placeholder="Atualize o comentário"
                    
             
             />
             <Button onClick={editAluno}>Editar</Button>
             </FormGroup>
             
        </div>
        <Alunos />
        </>
            
           
            
    );
}