import React from 'react';
import './App.css';
import styled from 'styled-components';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import fotoPerfil from './img/fotoPerfil.jpg';
import logoMsF from './img/logoMsF.jpg';
import logoCF from './img/logoCF.png';
import email from './img/email.png'
import endereco from './img/endereco.png'



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoPerfil} 
          nome="Hugo Aguiar" 
          descricao="Olá, eu sou o Hugo Aguiar. Trabalho como representante de vendas terceirizado. Atualmente estou cursando Desenvolvimento Front-End com React na Labenu! Estou me especializando em ferramentas HTML, JAVASCRIPT, CSS e REACT. Estou em processo de transição de carreira."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div> 
        <CardPequeno 
          imagem={email}
          nome="Email: "
          informacao=" hugo@aguiar.com.br"
        />
      </div>

      <div>
        <CardPequeno
          imagem={endereco}
          nome="Endereço: "
          informacao=" Ceará - Brasil"
        />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={logoCF} 
          nome="Casa Feitas - Terceirizado" 
          descricao="Represento a empresa em toda a região Norte do Ceará, atendendo em mais de 20 cidades." 
        />
        
        <CardGrande 
          imagem={logoMsF} 
          nome="Mercantil São Francisco - Proprietário" 
          descricao="Comércio Varejista de Alimentos" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
