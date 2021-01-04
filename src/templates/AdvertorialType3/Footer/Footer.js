import React from "react"
import * as S from "./Footer.style"
import renderOptions from "../../utils/richText"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

function DefaultFooter({ links, companyDetails }) {
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

function Adv3Footer({footerSection}) {
  return <S.Wrapper>
{documentToReactComponents(footerSection,renderOptions)}
  </S.Wrapper>
}

function Footer({ links, companyDetails, footerSection }) {
  return footerSection ? <Adv3Footer footerSection={footerSection} /> : <DefaultFooter links={links} companyDetails={companyDetails} />
}

export default Footer
