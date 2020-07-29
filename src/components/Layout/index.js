import React from "react"
import Footer from "../Footer"
import Header from "../Header"
import { Helmet } from "react-helmet"

export default ({
  children,
  className,
  locale,
  logo,
  extra,
  footer,
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
      {footer}
    </div>
  )
}
