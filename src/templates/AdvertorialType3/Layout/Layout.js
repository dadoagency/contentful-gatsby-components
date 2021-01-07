import React from "react"
import Header from "../Header/Header"
import "./Layout.scss"
import { Helmet } from "react-helmet"
import Footer from "../Footer/Footer"

export default ({
  children,
  className,
  locale,
  logo,
  headerContentRight,
  links,
  headerLinks,
  footerLinks,
  companyDetails,
  footerSection,
  pageTitle,
  ...props
}) => {
  return (
    <div {...props} className={`main-wrapper ${className}`}>
      <Helmet title={pageTitle}>
        <html className={className} lang={locale} />
      </Helmet>
      <Header logo={logo} headerContentRight={headerContentRight} />
      {children}
      <Footer links={footerLinks} companyDetails={companyDetails} footerSection={footerSection} />
    </div>
  )
}
