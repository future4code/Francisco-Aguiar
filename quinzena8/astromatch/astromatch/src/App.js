import react, {useEffect, useState} from "react";
import axios from 'axios';

import iconAdd from './Components/img/iconAdd.svg'
import iconMatch from './Components/img/iconMatch.svg'
import logo from './Components/img/logo.png'

import {ContainerPai} from './Components/Estilizacao/style'
import {Cabecalho} from './Components/Estilizacao/style'
import {Perfis} from './Components/Estilizacao/style'
import {Botoes} from './Components/Estilizacao/style'
import {Reset} from './Components/Estilizacao/style'




const App = () => {
  const [perfil, setPerfil] = useState([])
  const [matchs, setMatchs] = useState([])
  const [pagina, setPagina] = useState("inicial")

  useEffect(() => {
    pegarPerfil()
  }, [])

  const pegarPerfil = ()=>{
    axios
    .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francisco-aguiar/person')
    .then((res) => {
      setPerfil(res.data.profile)
    })
    .catch((err) => {console.log(err)})
  }

  const pegarMatchs = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francisco-aguiar/matches")
      .then((res) => {
        setMatchs(res.data.matches)
      })
      .catch((err) => {console.log(err)})
  }

  const onClickIconMatch = () => {
    pegarMatchs()
    setPagina("matchs")
  }

  const onClickIconAdd = () => {
    setPagina("inicial")
  }
  
  const onClickAceita = () => {
    const headers = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    const body = {
      "id": `${perfil.id}`,
	    "choice": true
    }

    if (!perfil.id) {
      return
    }

    axios
    .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francisco-aguiar/choose-person", body, headers)
    .then((res) => {
      console.log(res.data)
      pegarPerfil()
    })
    .catch((err) => {console.log(err)})
  }

  const onClickRejeitar = () => {
    if (!perfil.id) {
      return
    }
    pegarPerfil()
  }

  const onClickReset = () => {
    axios
      .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francisco-aguiar/clear")
      .then((res)=>{
        pegarMatchs()
      })
      .catch((err) => {
        console.log("limp", err)
      })
  }

  const paginaRenderizada = () =>{
    switch (pagina) {
      case 'inicial':
        return paginaInicial()
      case 'matchs':
        return paginaMatchs()  
    }
  }

  const paginaInicial = () =>{
    return (
      <ContainerPai>
        <Cabecalho>
          
          <img className="iconAdd" src= {iconAdd} alt="Ícone Adicionar"/>
          <img className="logo" src= {logo} alt="Logo"/>
          <img onClick={onClickIconMatch} className="iconMatch" src= {iconMatch} alt="Ícone Matchs"/>
          
        </Cabecalho>

        <div className="corpo">
          <Perfis>
            <img src= {perfil.photo} alt="Foto do perfil"/>
            <div>
              <p className="nome"><b>{perfil.name}</b>, {perfil.age}</p>
              <p>{perfil.bio}</p>
            </div>   
          </Perfis>

          <Botoes>
            <button className="rejeitar" onClick={onClickRejeitar}>X</button>
            <button className="aceitar" onClick={onClickAceita}>♥️</button>
          </Botoes>
        </div>  
      </ContainerPai>
    )}

  const paginaMatchs = () => {
    return(
      <ContainerPai>
        <Cabecalho>
        
          <img onClick={onClickIconAdd} className="iconAdd" src= {iconAdd} alt="Ícone Adicionar"/>
          <img className="logo" src= {logo} alt="Logo"/>
          <img className="iconMatch" src= {iconMatch} alt="Ícone Matchs"/>
          
        </Cabecalho>

        <div className="corpo">
          {matchs.map((iten) =>{
            return(
              <div className= "matches" key={iten.id}>
                <img src={iten.photo} alt="Foto usuario"/>
                <p>{iten.name}</p>
              </div>
            )
          })}

        </div>



      </ContainerPai>
    )
  }

  return (
    <div>
      {paginaRenderizada()}
      <Reset onClick={onClickReset}>Resetar</Reset>
      
    </div>
  );
}

export default App;
