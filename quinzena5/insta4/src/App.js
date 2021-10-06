import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

`

const Formulario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
  margin-bottom: 8px;
`

class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario:'paulinha',
        fotoUsuario:'https://picsum.photos/50/50',
        fotoPost:'https://picsum.photos/200/150'
      },
      {
        nomeUsuario:'jarbas',
        fotoUsuario:'https://picsum.photos/200/300',
        fotoPost:'https://picsum.photos/200'
      },
      {
        nomeUsuario:'julia',
        fotoUsuario:'https://picsum.photos/200/300/?blur',
        fotoPost:'https://picsum.photos/id/237/200/300'
      }

    ],
    valorInputNome : "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  onChangeNome = (event) => {
    this.setState({valorInputNome: event.target.value})
  }

  onChangeFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value})

  }

  onChangeFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value})

  }
  
  adicionaPost = () => {
    const novaPublicacao = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    }

    const novoPost = [...this.state.post, novaPublicacao]
    
    this.setState({
      post: novoPost, 
      valorInputNome: "", 
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    })
  }

  render() {
    const elementos = this.state.post.map((iten) => {
      return (
        <Post
          nomeUsuario = {iten.nomeUsuario}
          fotoUsuario = {iten.fotoUsuario}
          fotoPost = {iten.fotoPost}
        
        />
        
        
      )
    })
    return (
      <MainContainer>
        <Formulario>
          <h1>Adicionar Novo Post</h1>
          <input 
            value= {this.state.valorInputNome}
            onChange={this.onChangeNome}
            placeholder="Nome do usuário"
          />
          <input
            value= {this.state.valorInputFotoUsuario}
            onChange={this.onChangeFotoUsuario}
            placeholder="Url da foto do usuário"
          />
          <input
            value= {this.state.valorInputFotoPost}
            onChange={this.onChangeFotoPost}
            placeholder="Url da foto do post"
                    
          />
          <button onClick={this.adicionaPost}>Enviar</button>
        </Formulario>

        {elementos}

      </MainContainer>
    );
  }
}

export default App;
