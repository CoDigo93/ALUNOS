import React ,{useEffect ,useState} from 'react';
import { Table, FormGroup, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import {FiSearch, FiEdit, FiTrash2} from 'react-icons/fi';
import api from '../Services/API';



export default function Alunos () {
 const [alunos, setAlunos]= useState([]);

  useEffect(() =>{
    api.get('/alunos').then(response =>{
      setAlunos(response.data)
    });
  },[]);

  

  async function deleteAluno(_id){
    try{  
      await api.delete(`alunos/${_id}`);
      
      
      setAlunos(alunos.filter(aluno => aluno._id !== _id));
    }catch(err){
      alert('Erro ao deletar,tente novamente!');
      }
}

function toggleSearch(event){
  var busca = document.querySelector('#inputSearch');
  busca.classList.toggle('hide');

}

function toggleEditInput(event){
  var input = document.querySelector('#editInput');

  input.classList.toggle('hide');
  

  
}

function buscaAlunos(event){
  
var alunos = document.querySelectorAll('.tralunos');
  for(var i=0; i < alunos.length; i++){
    var aluno = alunos[i];
    var camponomes = aluno.querySelector('#name');
    var nome = camponomes.textContent;
    var regex = new RegExp(event.target.value,'i');
    if(!regex.test(nome)){
      aluno.classList.add('hide');
    }else{
      aluno.classList.remove('hide');
    }
  }
  console.log(nome);
console.log(event.target.value);

}
  return (
    <>
    <Home/>
      <section className="aluno-button">
        <Link to="/cadastro">Adicionar aluno</Link>
      </section>    
    
    <div className="list-conteiner">
      
      <Table dark responsive className="alunos-table" >
      <thead>
        <tr>
          <th>#</th>
          <><th className="name-search-conteiner"><span>Nome</span>
          <Button id="Button"
                  onClick={toggleSearch}
                  color="" 
                  className="searchButton">
                  <FiSearch/>
          </Button>
          
          <FormGroup onInput={buscaAlunos} id='search-input'>
              <Input id="inputSearch"className='hide' 
                      type='form' 
                      name='search' 
                      placeholder='buscar aluno'/>
                      
          </FormGroup>
          </th></>
          <th>instrumento</th>
          <th>Aula</th>
          
        </tr>
      </thead>
      <tbody>
        
          {alunos.map((aluno,i) => (
          <>  
          <tr key={aluno._id} className="tralunos">
          <th  scope="row">{i}</th>
            <td  id='name'><p id='name'>{aluno.name}</p> 
            
              <Button id="Button" 
                      color="" 
                      onClick={()=> {
                        localStorage.setItem('alunoId' , aluno._id)
                      }}
                      className="editButton">
                      
                      <Link className="link" to="alunos/modal"><FiEdit/></Link>  
                      
              </Button>
              <Button id="Button"
                      onClick={() => deleteAluno(aluno._id)} 
                      color="" 
                      className="deleteButton">
                      <FiTrash2/>
              </Button>
            </td>
            
            <td id='instrument'>{aluno.instrument} 
              <Button id="Button"
                      onClick={toggleSearch} 
                      color="" 
                      className="editButton">
                      <FiEdit/>
              </Button>
            </td>
            
            <td id='date'> 
              <Button id="Button"
                      onClick={toggleSearch} 
                      color="" 
                      className="editButton">
                    <FiEdit/>
              </Button>
            </td>
          </tr>
            </>
          ) )}
         
        
        
      </tbody>
    </Table>
    </div>
    </>
      );
}

