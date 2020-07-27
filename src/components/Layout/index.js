import React from "react"
import Footer from "../Footer"
import Header from "../Header"
import { Helmet } from "react-helmet"

export default ({
  children,
  references,
  className,
  locale,
  logo,
  extra,
  companyDetails,
  footerLinks,
  footerBody,
  ...props
}) => {
  return (
    <div {...props}>
      <Helmet>
        <html className={className} lang={locale} />
      </Helmet>
      <Header logo={logo} extra={extra} />
      <section className="site-data-container">
        <div className="site-data-wrapper section">{children}</div>
      </section>
      <Footer
        references={references}
        footerLinks={footerLinks}
        companyDetails={companyDetails}
        footerBody={footerBody}
      />
    </div>
  )
}
