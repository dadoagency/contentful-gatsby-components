import React from "react"
import * as S from "./Hero.style"
import ArticleImage from "@dadoagency/contentful-gatsby-components/src/components/Image/index"

function Hero({ image, body }) {
  return (
    <S.Wrapper>
      <ArticleImage fluid={image} alt="Logo" />
      <S.Caption>Actual Customer. Results may vary.</S.Caption>
      <S.HeroBody>{body}</S.HeroBody>
    </S.Wrapper>
  )
}

export default Hero
