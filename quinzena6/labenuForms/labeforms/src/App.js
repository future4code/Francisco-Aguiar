import React from 'react';
import styled from 'styled-components';
import Etapa1 from './Componentes/Etapa1';
import Etapa2 from './Componentes/Etapa2';
import Etapa3 from './Componentes/Etapa3';
import Final from './Componentes/Final';

const APP = styled.div`
  text-align: center;
`
const BOTAO = styled.button`
  margin-top: 30px;
`


class App extends React.Component {
  state = {
    pagina1: true,
    pagina2: false,
    pagina3: false,
    paginaFinal: false,
    botao: true

  }
  renderizaBotao = () => {
    if (this.state.botao === true){
      return <BOTAO onClick = {this.onClick}>Próxima Etapa</BOTAO>
    }
  }

  renderizaTelas = () => {
    if(this.state.pagina1 === true) {
      return <Etapa1/>
    }
    else if (this.state.pagina2 === true) {
      return <Etapa2/>
    }
    else if (this.state.pagina3 === true) {
      return <Etapa3/>
    }
    else if (this.state.paginaFinal === true) {
      return <Final/>
    }
  }

  onClick = () => {
    if(this.state.pagina1 === true) {
      return (
        this.setState ({pagina1: false, pagina2: true})
      )
    }
    else if (this.state.pagina2 === true) {
      return(
        this.setState ({pagina2: false, pagina3: true})
      )
    }
    else if (this.state.pagina3 === true) {
      return (
        this.setState ({pagina3: false, paginaFinal: true, botao: false})
      )
    }
  }
  render(){
    return (
      <APP>
        {this.renderizaTelas()}
        {this.renderizaBotao()}
        
      </APP>
    );
}
}
export default App;
