import React from "react";
import styled from "styled-components";


const ContainerPai = styled.div`
  text-align: center;
  
`

const Header = styled.header`
  height: 100px;
  background-color: #F0831E;
  display: flex;
  align-items: center;
  padding-left: 20px;
` 

export class App extends React.Component {
  render() {
    return (
      <ContainerPai>
        <Header>
          <h1> 🎶 LabeFy Music</h1>
        </Header>
        <div>
          oi
        </div>
        
      </ContainerPai>
    );
  }
}

export default App;
