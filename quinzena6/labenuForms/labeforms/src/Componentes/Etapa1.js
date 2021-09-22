import React from "react";
import styled from "styled-components";


const BOTAO = styled.button`
  margin-top: 30px;
`

class Etapa1 extends React.Component{
    render() {
        return(
            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <div>
                    <p>1. Qual o seu nome?</p>
                    <input/>
                </div>
                <div>
                    <p>2. Qual sua idade?</p>
                    <input/>
                </div>
                <div>
                    <p>3. Qual seu email?</p>
                    <input/>
                </div>
                <div>
                    <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Superior Incompleto</option>
                    <option>Ensino Superior Completo</option>
      
                </select>
            </div>
            <BOTAO>Próxima Etapa</BOTAO>
          </div>            
          

        )
    }
}

export default Etapa1