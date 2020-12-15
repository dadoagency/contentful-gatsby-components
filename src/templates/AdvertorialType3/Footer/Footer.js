import React from "react"
import * as S from "./Footer.style"

function Footer({ links, companyDetails }) {
  const { name, url } = companyDetails
  return (
    <S.Wrapper>
      <S.Copyright>
        Copyright © {new Date().getFullYear()}{" "}
        <a href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </S.Copyright>
      <S.Nav>
        <S.List>
          {links.map(link => (
            <S.ListItem key={`${link.url}-${link.text}`}>
              <S.Link href={link.url}>{link.text}</S.Link>
            </S.ListItem>
          ))}
        </S.List>
      </S.Nav>
      <S.Disclaimer>
        *Results not typical. This product is not intended to treat, cure or
        prevent any disease.
      </S.Disclaimer>
    </S.Wrapper>
  )
}
export default Footer
