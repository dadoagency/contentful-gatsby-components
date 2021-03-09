import React from 'react'
import * as S from "./Heading.style"
import { useStaticQuery, graphql } from "gatsby"

export default ({ heading }) => {

    const data = useStaticQuery(graphql`
    {
      file(base: {eq: "author-avatar.png"}) {
        childImageSharp {
          fixed {
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
            <S.Title>DOG / ELDERLY</S.Title>
            <S.Line />
        </S.Categorization>
        <S.Author>
            <S.Avatar src={ImageSrc} />
            <S.Meta>
                BY:
                <S.Name>
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
