import React from "react"
import Tracking from "../../components/Tracking"
import renderOptions from "../../utils/richText"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "./Layout/Layout"
import { graphql } from "gatsby"
import "./AdvertorialType3.scss"
import Container from "./Container/Container"
import Hero from "./Hero/Hero"
import Main from "./Main/Main"
import * as S from "./AdvertorialType3.style"
import useRedirectDestination from "../../hooks/useRedirectDestination"
import { PageProvider } from "../../context/PageContext"

// eslint-disable-next-line no-undef
export const AdvertorialType3Page = graphql`
  fragment AdvertorialType3Page on ContentfulAdvertorialType3 {
      id
      contentful_id
      path
      pageTitle
      facebookPixelId
      redirectDestinations {
        url
        params {
          key
          value
        }
      }
      heading
      headerContentRight {
        json
      }
      heroImage {
        image {
          fluid {
            aspectRatio
            base64
            srcWebp
            srcSetWebp
            sizes
            src
            srcSet
          }
        }
      }
      heroSection {
        json
      }

      body {
        json
      }
      footer {
        json
      }
    }
`

function AdvertorialType3(props) {

  const { companyDetails, footerLinks } = props;

  const node = props

  const pageTitle = node.pageTitle

  const redirectDestinations = node.redirectDestinations
  useRedirectDestination(redirectDestinations)

  const facebookPixelId = node.facebookPixelId

  const headerContentRight = node.headerContentRight.json

  const logo = props.logo.src

  const heroTitle = node.heading
  const heroImg = node.heroImage.image.fluid
  const heroSection = node.heroSection.json
  const mainSection = node.body.json
  const footerSection = node.footer ? node.footer.json : null

  return (
    <>
      <Tracking pixelId={facebookPixelId} />
      <Layout
        className="advertorial-type-3"
        logo={logo}
        footerLinks={footerLinks}
        companyDetails={companyDetails}
        footerSection={footerSection}
        headerContentRight={documentToReactComponents(
          headerContentRight,
          renderOptions
        )}
        pageTitle={pageTitle}
      >
        <Container>
          <h1>{heroTitle}</h1>
          <S.MainWrapper>
            <S.MainContainer>
              <Hero
                image={heroImg}
                body={documentToReactComponents(heroSection, renderOptions)}
              />
              <Main
                body={documentToReactComponents(mainSection, renderOptions)}
              />
            </S.MainContainer>
          </S.MainWrapper>
        </Container>
      </Layout>
    </>
  )
}

export default props => {
  return (
    <PageProvider>
      <AdvertorialType3 {...props} />
    </PageProvider>
  )
}
