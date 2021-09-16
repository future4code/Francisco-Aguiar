import React from 'react';
// import './CardGrande.css'

import {BigCardContainer} from '../../styles.js';
import {ImgBigCard} from '../../styles.js';
import {TittleBigCard} from '../../styles.js';
import {DivTextBigCard} from '../../styles.js';


function CardGrande(props) {
    return (
        <BigCardContainer>
            <ImgBigCard src={ props.imagem } />
            <DivTextBigCard>
                <TittleBigCard>{ props.nome }</TittleBigCard>
                <p>{ props.descricao }</p>
            </DivTextBigCard>
        </BigCardContainer>
    )
}

export default CardGrande;