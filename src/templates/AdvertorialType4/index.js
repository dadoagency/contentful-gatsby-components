import React from "react"
import { graphql } from "gatsby"
import "./style.scss"
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
  }
`

const Layout = styled.div`
  padding-top: 90px;
`

const AdvertorialType4 = ({ facebookPixelId, logo, companyDetails, footerLinks }) => {
  return (
    <>
      <Helmet title="Petlab Co." />
      <Layout className="advertorial-type-4">
        <Tracking pixelId={facebookPixelId} />
        <Header logo={logo} />
        <Body />
        <Footer />
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
