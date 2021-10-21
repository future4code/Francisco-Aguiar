import React from "react";
import styled from "styled-components";
import axios from "axios";

import iconDelete from "./img/iconDelete.svg"
import iconDetails from "./img/iconDetails.svg"
import iconAdd from "./img/iconAdd.svg"
import iconPlay from "./img/iconPlay.svg"


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
const PaginaCriarMusica = styled.div`
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
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    row-gap: 10px;

    h3{
      font-size: 30px;
      padding-top: 40px;
    }

    .infoFaixa{
      padding-top: 10px;
      display: flex;
      flex-direction: column;
      row-gap: 5px;
      padding-bottom: 10px;

      p{
        font-size: 20px;
      }
    }
    button {
    border:1px solid #25692A;
    border-radius:100px;
    display:inline-block;
    cursor:pointer;
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
const PlayListDetalhes = styled.div`
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

const Tracks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  width: 900px;
  height: 70px;
  padding: 0 5px;




  .musica{
    font-size: 25px;
    padding-left: 20px;
  }
  .artista{
    align-self: center;
    padding-top: 10px;
  }
  div{
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
    detalhesPlayListEscolhida: [],
    pegaNomeDaPlayListClicada: [],
    idDaPlayListQueAMusicaVaiSerAdicionada: "",
    inputNomeMusica: "",
    inputNomeArtista: "",
    inputUrlMusica: "",
    nomeDaPlayListClicadaParaAddMusica: []
  }
  
  componentDidMount() {
    this.pegarPlayList()
    this.detalhesPlayList()  
  }

  onChangeInputNomePlayList = (e) => {
    this.setState ({inputNomePlayList: e.target.value})
  }

  onChangeInputNomeMusica = (e) => {
    this.setState ({inputNomeMusica: e.target.value})
  }

  onChangeInputNomeArtista = (e) => {
    this.setState ({inputNomeArtista: e.target.value})
  }

  onChangeInputUrlMusica = (e) => {
    this.setState ({inputUrlMusica: e.target.value})
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

  onClickAddMusica = (id) => {
    const pegaNomeDaPlayListClicada = this.state.playlist.filter((iten) =>{
      if(iten.id === id) {
        return iten
      }
    }).map((iten)=>{return iten.name})

    this.setState({paginaRenderizada: "addMusica", 
    idDaPlayListQueAMusicaVaiSerAdicionada: id, 
    nomeDaPlayListClicadaParaAddMusica: pegaNomeDaPlayListClicada
  })
  }

  onClickRemoverMusica = (id) => {
    if(window.confirm("Deseja excluir música?")){
      axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idDaPlayListQueAMusicaVaiSerAdicionada}/tracks/${id}`, Headers)
      .then((res)=>{
        alert("Música removida com sucesso! Atualize a página para salvar as alterações!")
        this.detalhesPlayList()
        this.pegarPlayList()
      })
      .catch((res)=> {console.log("erro!")})
    }
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
    if(window.confirm("Deseja excluir playlist?")) {
      axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, Headers)
      .then((res) =>{
        alert("Playlist removida com sucesso!")
        this.pegarPlayList()
      })
      .catch((res)=>{console.log("erro!")})
    }
  }

  adicionarMusica = () => {
    const body = {
      name: this.state.inputNomeMusica, 
      artist: this.state.inputNomeArtista,
      url: this.state.inputUrlMusica
  }
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.idDaPlayListQueAMusicaVaiSerAdicionada}/tracks`,
        body,
        Headers
      )
      .then((res)=> {
        alert("Música adicionada com sucesso!")
        this.setState ({inputNomeArtista: "", inputNomeMusica:"", inputUrlMusica:""})
      })
      .catch((res)=> {console.log("erro!")})
  }

  detalhesPlayList = (id) => {
    const nomePlayListClicada = this.state.playlist.filter((iten) =>{
      if(iten.id === id) {
        return iten
      }
    }).map((iten)=>{return iten.name})

    console.log ("Nome", nomePlayListClicada)
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, Headers)
      .then((res) => {
        console.log("id", id)
        console.log("playlistEscolhida", res.data.result.tracks)
        this.setState({
          detalhesPlayListEscolhida: res.data.result.tracks, 
          pegaNomeDaPlayListClicada: nomePlayListClicada, 
          paginaRenderizada: "detalhes",
          idDaPlayListQueAMusicaVaiSerAdicionada: id 
        })
      })
      .catch((res)=> console.log("erro!"))
  }

  paginaRenderizada = () => {
    switch (this.state.paginaRenderizada){
      case "addMusica":
        return this.paginaAdicionarMusica()
      case "detalhes":
        return this.paginaDetalhesPlayList()
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

  paginaAdicionarMusica = () => {
    return (
      <PaginaCriarMusica>
        <div className="divPrincipal">
          <h3>Adicionar Música à PlayList {this.state.nomeDaPlayListClicadaParaAddMusica.map((res)=>{return res})}</h3>
          <div className="infoFaixa">
            <p>Nome da Música</p>
            <input
              placeholder= "Nome da Música"
              value= {this.state.inputNomeMusica}
              onChange= {this.onChangeInputNomeMusica}/>
          </div>
          <div className="infoFaixa">
            <p>Nome do Artista/Banda</p>
            <input
              placeholder= "Nome do Artista/Banda"
              value= {this.state.inputNomeArtista}
              onChange= {this.onChangeInputNomeArtista}/>
          </div>
          <div className="infoFaixa">
            <p>Link da Música</p>
            <input
              placeholder= "Url"
              value= {this.state.inputUrlMusica}
              onChange= {this.onChangeInputUrlMusica}/>
          </div>
          <button onClick= {this.adicionarMusica}>Adicionar Música</button>
        </div>
      </PaginaCriarMusica>
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
                <img onClick= {()=> this.onClickAddMusica(iten.id)} src={iconAdd} alt="icone adicionar"/>
                <img onClick= {()=> this.detalhesPlayList(iten.id)} src={iconDetails} alt="icone detlahes"/>
                <img onClick= {()=> this.excluirPlayList(iten.id)} src= {iconDelete} alt= "icone delete"/>
              </div>
              
              
            </ElementosLista>
          )
          
        })}
        
      </PaginaPlayLists>
    )
  }

  paginaDetalhesPlayList = () => {
    return(
      <PlayListDetalhes>
        <h1>🎵 {this.state.pegaNomeDaPlayListClicada.map((res)=> {return res})}</h1>
        {this.state.detalhesPlayListEscolhida.map((iten)=>{
          return(
          
            <Tracks>
              <audio controls> <source src={iten.url}/></audio>              
              <p className= "musica" key={iten.id}>🔊 {iten.name}</p>
              <p className= "artista">{iten.artist}</p>
              <div>
                <img onClick={()=>this.onClickRemoverMusica(iten.id)} src= {iconDelete} alt="ícone delete"/>
                
              </div>
              

            </Tracks>
        )})}

      </PlayListDetalhes>
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
