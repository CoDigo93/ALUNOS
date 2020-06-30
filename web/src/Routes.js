import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './Login/Login'
import Home from './Home/Home'
import Alunos from './Aluno/Alunos'
import CadastroAlunos from './Aluno/CadastroAlunos'
import Register from './Register/Register'
import Modal from './Aluno/Modal';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" exact component = {Login}/>
                <Route path = "/home"  component = {Home}/>  {/*Talvez eu mude o nome desse arquivo*/}
                <Route path = "/register" component = {Register} />
                <Route path = "/alunos" exact component = {Alunos} />
                <Route path = "/cadastro" component = {CadastroAlunos} />
                <Route path = "/alunos/modal" component = {Modal} />
            </Switch>
        </BrowserRouter>
    );
}