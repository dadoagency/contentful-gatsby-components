import React from 'react'
import * as S from './Footer.style'
import renderOptions from "../../../utils/richText"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default ({json, footerLinks}) => {
    return (
        <S.Container>
            <S.Row1>
                {documentToReactComponents(json, renderOptions)}
            </S.Row1>
            <S.Row>
                {footerLinks.map(({text,url}) => {
                    return <S.Col key={text} target="_blank" href={url}>{text}</S.Col>
                })}
            </S.Row>
        </S.Container>
    )
}
