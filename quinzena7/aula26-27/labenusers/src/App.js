import styled from 'styled-components';
import axios from 'axios';
import React from 'react';
import './App.css';

import {PaginaDeUsuarios} from './styled.js'
import {PaginaDeCadastro} from './styled.js'
import {FichaCadastro} from './styled.js'
import {UsuarioCadastrado} from './styled.js'
import {FicaEditarUsuario} from './styled.js'
import {ContainerPagEditar} from './styled.js'
import {ContainerPagDetalhes} from './styled.js'


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
    paginaEditar: false,
    buscarUsuario: false,
    usuarioBuscado: []
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

  onClickVoltarDaBusca = () => {
    this.setState({buscarUsuario: !this.state.buscarUsuario, inputNome:""})
  }

  onClickPaginaDeCadastro = () =>{
    this.setState({paginaRenderizada:"usuarios", inputNome:"", inputEmail:""})
  }

  onClickPaginaDeUsuarios= () => {
    this.setState({paginaRenderizada: "cadastro", inputNome:"", inputEmail:""})
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
    if(this.state.buscarUsuario === false){
      return (
        <PaginaDeUsuarios>
          <button onClick={this.onClickPaginaDeUsuarios}>Página de Cadastro</button>
          <h3>Lista de usuários cadastrados</h3>
          <div>
            <input
              placeholder="Buscar nome"
              value= {this.state.inputNome}
              onChange= {this.onChangeNome}
            />
            <button onClick={this.buscarUsuario}>Buscar</button>
          </div>

          
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
    } else{
      return(
        <PaginaDeUsuarios>
          <button onClick={this.onClickPaginaDeUsuarios}>Página de Cadastro</button>
          <h3>Lista de usuários cadastrados com o nome buscado</h3>
          <button onClick={this.onClickVoltarDaBusca}>Voltar</button>

          {this.state.usuarioBuscado.map((usuario) =>{
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
  }

  paginaDetalhesUsuario = () => {
    if(this.state.paginaEditar === false) {
      return(
        <ContainerPagDetalhes>
          <h3>Usuário {this.state.detalhesUsuario.name}</h3>
          <p>Nome: {this.state.detalhesUsuario.name}</p>
          <p>Email: {this.state.detalhesUsuario.email}</p>
          <button onClick={() => this.excluirUsuario(this.state.detalhesUsuario.id)}>Deletar</button>
          <button onClick={this.onClickPaginaDeCadastro}>Voltar</button>
          <button onClick={this.onClickPaginaEditarUsuario}>Editar</button>
        </ContainerPagDetalhes>
      )
    } else{
      return(
        <ContainerPagEditar>
            <h3>Usuário {this.state.detalhesUsuario.name}</h3>
            <p>Nome: {this.state.detalhesUsuario.name}</p>
            <p>Email: {this.state.detalhesUsuario.email}</p>

            {this.paginaEditarUsuario()}
        </ContainerPagEditar>
      )}
    
  }

  paginaEditarUsuario = () => {
    return(
      <FicaEditarUsuario>
        <h3>Insira os novos dados!</h3>
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
          <button onClick={this.editarUsuario}>Salvar</button>
          <button onClick={this.onClickPaginaEditarUsuario}>Cancelar</button>
      </FicaEditarUsuario>
    )
  }

  buscarUsuario = () =>{
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.inputNome}`, headers)
      .then((res)=>{
        console.log("userBuscar",res.data)
        this.setState({usuarioBuscado: res.data, buscarUsuario: !this.state.buscarUsuario})
      })
      .catch((err)=>{alert("Usuário não encontrado!")})
  }

  editarUsuario= () => {
    const body= {
      name: this.state.inputNome,
      email: this.state.inputEmail
    }

    if(window.confirm(`Deseja editar o usuário?`)){
      axios
      .put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.state.detalhesUsuario.id}`, body, headers)
      .then((res) => {
        alert("Usuário editado com sucesso!")
        this.setState({paginaEditar: !this.state.paginaEditar})
        this.pegarDetalhesUsuario(this.state.detalhesUsuario.id)
      })
      .catch((err)=>{console.log("Erro! Não foi possível editar usuário!")})
    }

    
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
        this.setState({usuarios: resultado.data})
        this.pegarListaDeUsuarios()
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
        this.setState({idUsuarioRemover: "",paginaRenderizada: "usuarios", buscarUsuario: false, inputNome: ""})
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