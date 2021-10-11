import React from "react";
import styled from "styled-components";
import axios from "axios";

import iconDelete from "./img/iconDelete.svg"
import iconDetails from "./img/iconDetails.svg"


const Headers = {
  headers: {
    Authorization: "francisco-aguiar-banu"
  }
}


const ContainerPai = styled.div`
  text-align: center;
  /* display: grid; */
  /* grid-row: 1fr 2fr 1fr; */
`

const Header = styled.header`
  height: 100px;
  background-color: #F0831E;
  display: flex;
  justify-content: space-between ;
  align-items: center;
  padding-left: 90px;
  padding-right: 200px;
  h1{
    cursor: pointer;
  }
` 

const MenuOpcoes = styled.nav`
  display: flex;
  column-gap: 20px;
  font-size: 20px;
  
  p{
    border: 1px solid black;
    border-radius: 15px;
    width: 180px;
    cursor: pointer;
    
  }
  p:hover{
    background-color: gray;
  }
  p:active{
    background-color: #F0831E ;
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
  button:hover{
    background-color: #212A ;
  }
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
  button:hover{
    background-color: #212A ;
  }


  }

`

const PaginaPlayLists = styled.div`
  background-image: url("https://images.vexels.com/media/users/3/145464/isolated/lists/0842d1719ec663c3256b9f46c740bbed-onda-de-audio.png");
  background-size: 75%;
  background-position: bottom 308% center ;
  background-color: #38FFA7;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 50px;
  gap: 10px;
  
`

const ElementosLista = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  width: 500px;
  height: 50px;
  padding: 0 5px;
  

  
  li{
    list-style: none;
    font-size: 25px;
    padding-left: 20px;
  }
  .imagens{
    display: flex;
    img{
      width: 30px;
      cursor:pointer;
      
    }
    
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
    playlist: [],
    paginaRenderizada: "inicial",
  }
  
  componentDidMount() {
    this.pegarPlayList()
  }

  onChangeInputNomePlayList = (e) => {
    this.setState ({inputNomePlayList: e.target.value})
  }

  onClickPaginaCriarPlayList = ()=> {
    this.setState ({paginaRenderizada: "cadastro"})
  }

  onClickPaginaMinhasPlayList = () => {
    this.setState ({paginaRenderizada: "playlists"})
  }

  onClickPaginaInicial = () => {
    this.setState ({paginaRenderizada: "inicial"})
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
        this.pegarPlayList()
      })
      .catch((res) => { alert("Erro! PlayList não cadastrada!")})
  }

  pegarPlayList = () => {
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", Headers)
      .then ((res) => {
        
        console.log ("resultado", res.data.result.list)
        this.setState({playlist: res.data.result.list})
        console.log("playlist", this.state.playlist)
      })
      .catch ((res) => console.log("erro!"))
  }

  excluirPlayList = (id) => {
    axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, Headers)
      .then((res) =>{
        alert("Playlist removida com sucesso!")
        this.pegarPlayList()
      })
  }

  paginaRenderizada = () => {
    switch (this.state.paginaRenderizada){
      case "playlists":
        return this.paginaPlayListsCadastradas()
      case "cadastro":
        return this.paginaCriarPlayList()
      default:
        return this.paginaInicial()
    }
      
  }

  paginaInicial = () => {
    return(
      <PaginaInicial>
        <h1>Músicas que tocam a alma</h1>
        <p>Uma infinidade de sons para todos os gostos e estilos musicais.</p>
        <button onClick={this.onClickPaginaCriarPlayList}>Criar Minha PlayList</button>
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

  paginaPlayListsCadastradas = () => {
    return(
      
      <PaginaPlayLists>
        <h1>🎵 Minhas PlayList</h1>
        {this.state.playlist.map((iten) => {
          return(
            <ElementosLista>
              <li key={iten.id}>{iten.name}</li>
              <div className="imagens">
                <img src={iconDetails} alt="icone detlahes"/>
                <img onClick= {()=> this.excluirPlayList(iten.id)} src= {iconDelete} alt= "icone delete"/>
              </div>
              
              
            </ElementosLista>
          )
          
        })}
        
      </PaginaPlayLists>
    )
  }
  render() {
 
    return (
      <ContainerPai>
        <Header>
          <h1 onClick= {this.onClickPaginaInicial}> 🎶 LabeFy Music</h1>
          <MenuOpcoes>
            <p onClick= {this.onClickPaginaMinhasPlayList}> Minhas PlayList</p>
            <p onClick= {this.onClickPaginaCriarPlayList} >Criar PlayList</p>
            
          </MenuOpcoes>
          
        </Header>
        <main>
          
          {this.paginaRenderizada()}
          
        </main>

        <Footer>
          © 2021 LabeFy Music
        </Footer>
        
        
      </ContainerPai>
    );
  }
}

export default App;
