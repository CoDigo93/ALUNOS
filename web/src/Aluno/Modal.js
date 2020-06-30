import React from 'react';
import Alunos from './Alunos';

export default function Modal(){
    return(
        <>
        
        <div className="mod">
             <div className="aluno-modal">
                 <p>Nome: Rodrigo Lustosa</p>
                 <p>Instrumento: Bateria</p>
                 <p>Data e Horário da aula: QUA 08:30hrs</p>
             </div>
        </div>
        <Alunos />
        </>
            
           
            
    );
}