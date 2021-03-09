import React, { useContext } from 'react'
import * as S from "./Heading.style"
import { useStaticQuery, graphql } from "gatsby"
import PageContext from "../../../context/PageContext"

export default ({ heading }) => {
  const { redirectDestination } = useContext(PageContext)
    const data = useStaticQuery(graphql`
    {
      file(base: {eq: "author-avatar.png"}) {
        childImageSharp {
          fixed(height: 50) {
            src
          }
        }
      }
    }
  `);

   const { file: { childImageSharp: { fixed: { src: ImageSrc }} } } = data;

    return (
        <>
        <S.Headline>{heading}</S.Headline>
        <S.Categorization>
            <S.Title href={redirectDestination}>DOG / ELDERLY</S.Title>
            <S.Line />
        </S.Categorization>
        <S.Author>
            <S.Avatar src={ImageSrc} />
            <S.Meta>
                BY:
                <S.Name href={redirectDestination}>
                    REBECCA T
                </S.Name>
                <S.Date>
                    March 2, 2021
                </S.Date>
            </S.Meta>
        </S.Author>
        </>
    )
}
