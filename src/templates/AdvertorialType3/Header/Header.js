import React from "react"
import * as S from "./Header.style"
import Container from "../Container/Container"

function Header({ logo, headerContentRight }) {
  return (
    <S.Wrapper>
      <Container>
        <S.Content>
          <img src={logo} alt="Logo" />
          {headerContentRight}
        </S.Content>
      </Container>
    </S.Wrapper>
  )
}

export default Header
