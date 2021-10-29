import styled from "styled-components";

export const ContainerPai = styled.div`
    border: 1px solid black;
    width: 400px;
    height: 600px;
    background-color: white;
    border-radius: 5px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .corpo{
        height: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        .matches{
            display: flex;
            align-items: center;
            margin-top: 10px;
            img{
                height: 60px;
                width: 80px;
                border-radius: 60px;
            }
        }
    }
   
`

export const Cabecalho= styled.div`
    display: flex;
    justify-content: space-between;
    height: 10%;
    align-items: center;
    border-bottom: 1px solid gray;
    width: 100%;
    /* position: fixed; */



    .logo{
        height: 100%;        
    }
    .iconMatch, .iconAdd{
        height: 50%;
        padding-left: 5px;
        padding-right: 5px;

    }
    .iconMatch:hover{
        height: 60%;
    }

`

export const Perfis =  styled.div`
    border: 1px solid black;
    min-height: 70%;
    min-width: 80%;
    margin: 20px;
    

    img{
        height: 100%;
        width: 100%;
        position: relative;
    }
    div{
        position: absolute;
        bottom: 25%;
        padding: 5px ;

        p{
            color: orange;
            width: 300px;
        }
        .nome{
            font-size: 25px;
        }

    }
`

export const Botoes= styled.div`
    height: 20%;
    display: flex;
    align-items: center;
    gap: 100px;
    

    .rejeitar {
        border-radius: 50%;
        width: 60px;
        height: 60px;
        border: 1px solid red;
        color: red;
        font-size: 30px;
    }
    .aceitar{
        border-radius: 50%;
        width: 60px;
        height: 60px;
        border: 1px solid green;
        color: green;
        font-size: 30px;
        cursor: pointer;
    }

    .rejeitar:hover{
        background-color: red;
        color: white;
        cursor: pointer;

        :active{

        }
    }

    .aceitar:hover{
        background-color: green;
        color: white;
    }
`

export const Reset = styled.button`
    display: inline-block;
    align-items: flex-start;
`