import styled from 'styled-components';
import axios from 'axios';
import React from 'react';
import './App.css';

const headers = {
  headers: {
    Authorization: "francisco-aguiar-banu"
  }
}

export default class App extends React.Component {
  state= {
    inputNome: "",
    inputEmail: ""

  }


  onChangeNome = (e) => {
    this.setState({inputNome: e.target.value})

  }

  onChangeEmail= (e) => {
    this.setState({inputEmail: e.target.value})
  }

  paginaDeCadastro = () => {
    return (
      <div>
        <h3>Cadastro de usuário</h3>
        <div>
          <p>Nome do Usuário:</p>
          <input
            placeholder="Digite seu nome"
            value= {this.state.inputNome}
            onChange= {this.onChangeNome}/>
        </div>
        <div>
          <p>Email:</p>
          <input
            placeholder="Digite seu email"
            value= {this.state.inputEmail}
            onChange= {this.onChangeEmail}/>
        </div>
        <button onClick={this.cadastrarUsuario}>Realizar Cadastro</button>
      </div>
    )
  }

  cadastrarUsuario = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }


    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, headers)
      .then((resultado) =>{
        alert("Cadastro realizado com sucesso!")
        this.setState({inputNome:"", inputEmail:""})
      })
      .catch((resultado)=> alert("Erro! Cadastro não realizado!"))
  }


  render() {
    return(
      <div className="App">
        <h1>Labenusers!</h1>
        {this.paginaDeCadastro()}
        

      </div>
    )
  }
}