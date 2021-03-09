import React from 'react'
import * as S from './Header.style'
import Img from "gatsby-image"
import Nav from "../Nav/Nav"

export default ({ logo }) => {
    return (
        <S.Container>
            <S.Row>
                <S.Col><Img className="logo" fixed={logo} /></S.Col>
                <S.Col className="center">ADVERTORIAL</S.Col>  
                <S.Col className="right"><Nav /></S.Col>
            </S.Row>  
        </S.Container>
    )
}
