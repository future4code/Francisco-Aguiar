import React from "react";
import styled from "styled-components";

const BOTAO = styled.button`
  margin-top: 30px;
`

class Etapa2 extends React.Component{
    render() {
        return(
            <div>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <div>
                    <p>5. Qual curso?</p>
                    <input/>
                </div>
                <div>
                    <p>6. Qual a unidade de ensino?</p>
                    <input/>
                </div>
                <BOTAO>Próxima Etapa</BOTAO>
            </div>

        )
    }
}

export default Etapa2