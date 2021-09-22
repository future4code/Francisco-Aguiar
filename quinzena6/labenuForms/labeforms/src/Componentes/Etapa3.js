import React from "react";
import styled from "styled-components";

const BOTAO = styled.button`
  margin-top: 30px;
`

class Etapa3 extends React.Component{
    render(){
        return(
            <div>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <div>
                    <p>5. Por que você não terminou um curso de graduação?</p>
                    <input/>
                </div>
                <div>
                    <p>6. Você fez algum curso complementar?</p>
                    <select>
                        <option>Curso técnico</option>
                        <option>Cursos de inglês</option>
                        <option>Não fiz curso complementar</option>
                    </select>
                </div>
                <BOTAO>Próxima Etapa</BOTAO>
            </div>

        )
    }
}

export default Etapa3