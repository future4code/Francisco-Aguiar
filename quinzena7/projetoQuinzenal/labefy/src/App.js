import React from "react";
import styled from "styled-components";
import axios from "axios";


const Headers = {
  headers: {
    Authorization: "francisco-aguiar-banu"
  }
}


const ContainerPai = styled.div`
  text-align: center;
  display: grid;
  grid-row: 1fr 2fr 1fr;
`

const Header = styled.header`
  height: 100px;
  background-color: #F0831E;
  display: flex;
  justify-content: space-between ;
  align-items: center;
  padding-left: 90px;
  padding-right: 200px;
` 

const MenuOpcoes = styled.nav`
  display: flex;
  column-gap: 20px;
  font-size: 20px;
  
  p{
    border: 1px solid black;
    width: 180px;
    
  }
`

const PaginaInicial = styled.div`
  background-image: url("https://images.vexels.com/media/users/3/145464/isolated/lists/0842d1719ec663c3256b9f46c740bbed-onda-de-audio.png");
  background-size: 50%;
  background-position: bottom 300% center ;
  background-color: #38FFA7;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 80px ;
  row-gap: 30px;

  h1{
    font-size: 80px;
    width: 500px;
     
  }
  p{
    font-size: 20px;
    width: 300px;
  }

  button {
    border:1px solid #25692A;
    border-radius:100px;
    display:inline-block;
    cursor:pointer;
    /* font-family:Verdana; */
    font-weight:bold;
    font-size:20px;
    padding:6px 10px;
    text-decoration:none
  };
`
const PaginaCriarPlayList = styled.div`
  background-image: url("https://images.vexels.com/media/users/3/145464/isolated/lists/0842d1719ec663c3256b9f46c740bbed-onda-de-audio.png");
  background-size: 50%;
  background-position: bottom 300% center ;
  background-color: #38FFA7;
  height: 560px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .divPrincipal{
    border: 1px outset black;
    border-radius: 2px;
    width: 400px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    row-gap: 10px;
    

    h3{
      font-size: 30px;
      padding-top: 40px;
    }

    .nomePlaylist{
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      padding-bottom: 30px;
      p{
        font-size: 20px;
      }
      
    }
    button {
    border:1px solid #25692A;
    border-radius:100px;
    display:inline-block;
    cursor:pointer;
    /* font-family:Verdana; */
    font-weight:bold;
    font-size:15px;
    padding:6px 10px;
    text-decoration:none
  };


  }

`

const Footer = styled.footer`
  background-color: black ;
  color: white;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export class App extends React.Component {
  state = {
    inputNomePlayList: "",
  }

  onChangeInputNomePlayList = (e) => {
    this.setState ({inputNomePlayList: e.target.value})
  }

  criarPlayList = () => {
    const body = {
      name: this.state.inputNomePlayList
    }


    axios
      .post ("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, Headers)
      .then((res) => {
        alert("PlayList cadastrada com sucesso!")
        this.setState({inputNomePlayList: ""})
      })
      .catch((res) => { alert("Erro! PlayList não cadastrada!")})
  }

  paginaInicial = () => {
    return(
      <PaginaInicial>
        <h1>Músicas que tocam a alma</h1>
        <p>Uma infinidade de sons para todos os gostos e estilos musicais.</p>
        <button>Criar Minha PlayList</button>
      </PaginaInicial>
    )
  }

  paginaCriarPlayList = () => {
    return (
      <PaginaCriarPlayList>
          <div className= "divPrincipal">
            <h3>Criar Nova PlayList</h3>
            <div className= "nomePlaylist">
              <p>Nome da PlayList:</p>
              <input
                placeholder= "Nome da PlayList"
                value= {this.state.inputNomePlayList}
                onChange= {this.onChangeInputNomePlayList}/>
            </div>
            <button onClick= {this.criarPlayList}>Criar PlayList</button>
          </div>
      </PaginaCriarPlayList>
    )
  }
  render() {
    return (
      <ContainerPai>
        <Header>
          <h1> 🎶 LabeFy Music</h1>
          <MenuOpcoes>
            <p> Minhas PlayList</p>
            
          </MenuOpcoes>
          
        </Header>
        <main>
          {this.paginaCriarPlayList()}
          
        </main>

        <Footer>
          © 2021 LabeFy Music
        </Footer>
        
      </ContainerPai>
    );
  }
}

export default App;
