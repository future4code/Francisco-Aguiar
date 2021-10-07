import styled from 'styled-components';
import axios from 'axios';
import React from 'react';
import './App.css';

const PaginaDeUsuarios= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`

const PaginaDeCadastro= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`

const FichaCadastro = styled.div`
  border: 1px solid black;
  width: 400px;
  padding-bottom: 10px;
  
  
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px ;
  }
`

const UsuarioCadastrado= styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 50px;
  padding: 10px;
  
`

const headers = {
  headers: {
    Authorization: "francisco-aguiar-banu"
  }
}

export default class App extends React.Component {
  state= {
    inputNome: "",
    inputEmail: "",
    usuarios: [],
    paginaRenderizada: "cadastro",
    idUsuarioRemover: ""
  }

  componentDidMount() {
    this.pegarListaDeUsuarios()
  }


  onChangeNome = (e) => {
    this.setState({inputNome: e.target.value})

  }

  onChangeEmail= (e) => {
    this.setState({inputEmail: e.target.value})
  }

  onClickPaginaDeCadastro = () =>{
    this.setState({paginaRenderizada:"usuarios"})
  }

  onClickPaginaDeUsuarios= () => {
    this.setState({paginaRenderizada: "cadastro"})
  }

  paginaRenderizada = () => {
    switch (this.state.paginaRenderizada){
      case 'usuarios':
        return this.paginaListaDeUsuarios()
      default:
        return this.paginaDeCadastro()
    }
  }

  paginaDeCadastro = () => {
    return (
      <PaginaDeCadastro>
        <button onClick={this.onClickPaginaDeCadastro}>Página de Usuários</button>
        <FichaCadastro>
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
        </FichaCadastro>
      </PaginaDeCadastro>
    )
  }

  paginaListaDeUsuarios = () => {
    return (
      <PaginaDeUsuarios>
        <button onClick={this.onClickPaginaDeUsuarios}>Página de Cadastro</button>
        <h3>Lista de usuários cadastrados</h3>
        
        {this.state.usuarios.map((usuario) =>{
          return (
            <UsuarioCadastrado>
              <li key={usuario.id}>{usuario.name}</li>
              <button onClick={() => this.excluirUsuario(usuario.id)}>Excluir</button>
            </UsuarioCadastrado>
          
          )
        })}
      </PaginaDeUsuarios>
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
        this.pegarListaDeUsuarios()
      })
      .catch((resultado)=> alert("Erro! Cadastro não realizado!"))
  }

  pegarListaDeUsuarios = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", headers)
      .then((resultado) => {
        console.log(resultado.data)
        this.setState({usuarios: resultado.data})
      })
      .catch((erro) => console.log(erro))
  }

  excluirUsuario = (id) => {

    console.log ("id:", id)
    axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, headers)
      .then((resultado) => {
        alert("Usuário excluído com sucesso!")
        this.setState({idUsuarioRemover: ""})
        this.pegarListaDeUsuarios()
      })
      .catch((resultado) => alert("Erro! Não foi possível ecluir o usuário!"))
  }


  render() {

    return(
      <div className="App">
        <h1>Labenusers!</h1>
        {this.paginaRenderizada()}
        
        

      </div>
    )
  }
}