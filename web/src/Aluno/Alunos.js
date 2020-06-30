import React ,{useEffect ,useState} from 'react';
import { Table, FormGroup, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import {FiSearch, FiEdit, FiTrash2} from 'react-icons/fi';
import api from '../Services/API';


const Alunos = (props) => {
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
            
          <tr  className="tralunos">
          <th key={aluno._id} scope="row">{i}</th>
            <td id='name'>{aluno.name} 
              <Button id="Button"
                      onClick={toggleSearch} 
                      color="" 
                      className="editButton">
                      <FiEdit/>
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
  


   {/* <ul><ListGroup className="list-group">
        <Link className="Link" to="/alunos/modal"><li><ListGroupItem color ="dark" active tag="a" href="/alunos/modal" action>Rodrigo Lustosa</ListGroupItem></li></Link>
        <li><ListGroupItem color ="dark" active tag="a" href="#" action>Fernanda Garcia</ListGroupItem></li>
        <li><ListGroupItem color ="dark" active tag="a" href="#" action>Raquel Rodrigues</ListGroupItem></li>
        <li><ListGroupItem color ="dark" active tag="a" href="#" action>Julio Rocha</ListGroupItem></li>
        <li><ListGroupItem color ="dark" active tag="a" href="#" action>Tahani Al-Jamil</ListGroupItem></li>
        <li><ListGroupItem color ="dark" active tag="a" href="#" action>Eleanor Shelstrop</ListGroupItem></li>
        <li><ListGroupItem color ="dark" active tag="a" href="#" action>Michael</ListGroupItem></li>
        <li><ListGroupItem color ="dark" active tag="a" href="#" action>Jason Mendoza</ListGroupItem></li>
        <li><ListGroupItem color ="dark" active tag="a" href="#" action>Julio Rocha</ListGroupItem></li>
        <li><ListGroupItem color ="dark" active tag="a" href="#" action>Julio Rocha</ListGroupItem></li>
        <li><ListGroupItem color ="dark" active tag="a" href="#" action>Julio Rocha</ListGroupItem></li>
        <li><ListGroupItem color ="dark" active tag="a" href="#" action>Julio Rocha</ListGroupItem></li>
        <li><ListGroupItem color ="dark" active tag="a" href="#" action>Julio Rocha</ListGroupItem></li>
        <li><ListGroupItem color ="dark" active tag="a" href="#" action>Julio Rocha</ListGroupItem></li>
      </ListGroup>
  </ul>*/}
    </div>
    </>
      );
}

export default Alunos;