import React from 'react';
// import './CardPequeno.css'

import {SmallCardContainer} from './stylesCardPequeno'
import {ImgSmallCard} from './stylesCardPequeno'


function CardPequeno (props) {
    return(
        <SmallCardContainer>
            <ImgSmallCard src= {props.imagem}/>
            <h4>{props.nome}</h4>
            <p>{ props.informacao }</p>
        </SmallCardContainer>
    )
}

export default CardPequeno;