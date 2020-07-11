import {Link,useHistory} from 'react-router-dom';
import React, { useState } from 'react';
import {FiPower} from 'react-icons/fi';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
/*{import imagemViolao from '../config';}*/
import icone from '../assets/violao-escuro.png';

const login = localStorage.getItem('login');
/*const SESSION = localStorage.getItem('token');*/




const Home = (props) => {
  const history = useHistory();
/*  
  if(SESSION == null)
    history.push('/');
  */
    function handleLogout(){
      localStorage.clear();
  
      history.push('/');
    }
  
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    
    <div className="Home">
      <Navbar color="" light expand="md" >
        <div className = "container">
        <NavbarBrand href="/"><img src={icone} alt ="Bigodeira" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Alunos
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                    <Link className="link" to="/alunos">
                      Listar Alunos
                    </Link>  
                </DropdownItem>
                <DropdownItem >
                  <Link className="link" to="/cadastro">
                    Cadastrar Aluno
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem >
                  <Link className="link" to="/Home">
                    Home
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
  
        
        </Collapse>
        
        </div>
        <NavbarText>Bem vindo, {login} !</NavbarText>
        <Button onClick={handleLogout} color="" className="logout"><FiPower/></Button>
      </Navbar>
    </div>
    

  );
}

export default Home;