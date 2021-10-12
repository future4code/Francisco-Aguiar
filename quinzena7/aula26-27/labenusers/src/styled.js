import styled from "styled-components"

export const PaginaDeUsuarios= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`

export const PaginaDeCadastro= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
`

export const FichaCadastro = styled.div`
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

export const ContainerPagEditar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`

export const FicaEditarUsuario = styled.div`
  border: 1px solid black;
  width: 400px;
  padding-bottom: 10px;
  padding-top: 10px;
  margin-top: 20px;
  


  
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px ;
  }
  button{
    margin-right: 10px;
  }
`

export const ContainerPagDetalhes= styled.div`
  button{
    margin-right: 10px;
  }
`

export const UsuarioCadastrado= styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 50px;
  padding: 10px;

  div{
    display: flex;
    gap: 3px;
  }
  
`


