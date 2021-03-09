import React, { useContext } from 'react'
import * as S from './RecommendedItem.style'
import renderOptions from "../../../utils/richText"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import PageContext from "../../../context/PageContext"

const Image = ({ image }) => {
    
    return <S.Image>
            <img src={image.fluid.src} />
    </S.Image>
}

const Details = ({ caption }) => {
    if( !caption ) return '';
    return (
        <S.Details>
                {documentToReactComponents(caption.json, renderOptions)}
        </S.Details>
    )
}
export default ({ image, caption }) => {
    const { redirectDestination } = useContext(PageContext)
    
    return (
        <S.Container>
            <a href={redirectDestination}>
            <Image image={image} />
            <Details caption={caption} />
            </a>
        </S.Container>
    )
}
