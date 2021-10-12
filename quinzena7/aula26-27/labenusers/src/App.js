import styled from 'styled-components';
import axios from 'axios';
import React from 'react';
import './App.css';

import {PaginaDeUsuarios} from './styled.js'
import {PaginaDeCadastro} from './styled.js'
import {FichaCadastro} from './styled.js'
import {UsuarioCadastrado} from './styled.js'



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
    idUsuarioRemover: "",
    detalhesUsuario: [],
    paginaEditar: false
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

  onClickPaginaEditarUsuario= () => {
    this.setState({paginaEditar: !this.state.paginaEditar})
  }

  paginaRenderizada = () => {
    switch (this.state.paginaRenderizada){
      case "detalhes":
        return this.paginaDetalhesUsuario()
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
              <div>
                <button onClick= {()=> this.pegarDetalhesUsuario(usuario.id)}>Detalhes</button>
                <button onClick={() => this.excluirUsuario(usuario.id)}>Excluir</button>
              </div>
              
              
            </UsuarioCadastrado>
          
          )
        })}
      </PaginaDeUsuarios>
    )
  }

  paginaDetalhesUsuario = () => {
    if(this.state.paginaEditar === false) {
      return(
        <div>
          <h3>Usuário {this.state.detalhesUsuario.name}</h3>
          <p>Nome: {this.state.detalhesUsuario.name}</p>
          <p>Email: {this.state.detalhesUsuario.email}</p>
          <button onClick={() => this.excluirUsuario(this.state.detalhesUsuario.id)}>Deletar</button>
          <button onClick={this.onClickPaginaDeCadastro}>Voltar</button>
          <button onClick={this.onClickPaginaEditarUsuario}>Editar</button>
        </div>
      )
    } else{
      return(
        <div>
            <h3>Usuário {this.state.detalhesUsuario.name}</h3>
            <p>Nome: {this.state.detalhesUsuario.name}</p>
            <p>Email: {this.state.detalhesUsuario.email}</p>

            {this.paginaEditarUsuario()}
        </div>
      )}
    
  }

  paginaEditarUsuario = () => {
    return(
      <div>
        <div>
            <p>Novo Nome:</p>
            <input
              placeholder="Digite o novo nome"
              value= {this.state.inputNome}
              onChange= {this.onChangeNome}/>
          </div>
          <div>
            <p>Novo Email:</p>
            <input
              placeholder="Digite o novo email"
              value= {this.state.inputEmail}
              onChange= {this.onChangeEmail}/>
          </div>
          <button>Salvar</button>
          <button onClick={this.onClickPaginaEditarUsuario}>Cancelar</button>
      </div>
    )
  }


  pegarDetalhesUsuario = (id) => {
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, headers)
      .then((res)=>{
        console.log('res', res.data)
        this.setState({detalhesUsuario: res.data, paginaRenderizada: "detalhes"})
        console.log("state", this.state.detalhesUsuario)
      })
      .catch((err)=>{console.log("Erro!")})
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

    if(window.confirm(`Deseja excluir o usuário?`)){
      axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, headers)
      .then((resultado) => {
        alert("Usuário excluído com sucesso!")
        this.setState({idUsuarioRemover: "",paginaRenderizada: "usuarios"})
        this.pegarListaDeUsuarios()
      })
      .catch((resultado) => alert("Erro! Não foi possível ecluir o usuário!"))

    }
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