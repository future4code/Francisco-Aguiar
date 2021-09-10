import React from 'react';
// import './ImagemButton.css'

import {ImageButtonContainer} from './stylesImgButtom'
import {ImgButtonContainer} from './stylesImgButtom'


function ImagemButton(props) {
    return (
        <ImageButtonContainer>
            <ImgButtonContainer src={ props.imagem }/>
            <p>{ props.texto }</p>
        </ImageButtonContainer>

    )
}

export default ImagemButton;