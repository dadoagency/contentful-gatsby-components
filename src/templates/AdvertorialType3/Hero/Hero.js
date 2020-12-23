import React from "react"
import * as S from "./Hero.style"
import ArticleImage from "../../../components/Image/index"

function Hero({ image, body }) {
  return (
    <S.Wrapper>
      <ArticleImage fluid={image} alt="Logo" className="hero-image" />
      <S.Caption className="hero-disclaimer">Actual Customer. Results may vary.</S.Caption>
      <S.HeroBody className="hero-body">{body}</S.HeroBody>
    </S.Wrapper>
  )
}

export default Hero
