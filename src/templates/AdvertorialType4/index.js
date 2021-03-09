import React from "react"
import { graphql } from "gatsby"
import "./style.scss"
import useRedirectDestination from "../../hooks/useRedirectDestination"
import { PageProvider } from "../../context/PageContext"
import Tracking from "../../components/Tracking"
import styled from 'styled-components';
import { Helmet } from "react-helmet"
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'

export const AdvertorialType4Page = graphql`
  fragment AdvertorialType4Page on ContentfulAdvertorialType4 {
    facebookPixelId
    path
    pageTitle
    heading
    redirectDestinations {
      url
      params {
        key
        value
      }
    }
    body {
      json
    }
    footer {
      json
    }
    recommendedPosts {
      image {
        fluid {
          src
        }
      }
      caption {
        json
      }
    }
  }
`

const Layout = styled.div`
  padding-top: 90px;
`

const AdvertorialType4 = (props) => {
  const { facebookPixelId, redirectDestinations, logo, companyDetails, footerLinks, footer } = props;
  useRedirectDestination(redirectDestinations)
  return (
    <>
      <Helmet title={companyDetails.name} />
      <Layout className="advertorial-type-4">
        <Tracking pixelId={facebookPixelId} />
        <Header logo={logo} />
        <Body {...props} />
        <Footer {...footer} footerLinks={footerLinks} />
      </Layout>
    </>
  )
}

export default props => {
  return (
    <PageProvider>
      <AdvertorialType4 {...props} />
    </PageProvider>
  )
}
