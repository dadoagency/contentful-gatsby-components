import React from "react"
import Header from "../Header"
import { Helmet } from "react-helmet"

export default ({
  children,
  className,
  locale,
  logoPosition,
  headerText,
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
      <Header logoPosition={logoPosition} headerText={headerText} logo={logo} />
      <section className="site-data-container">
        <div className="site-data-wrapper section">{children}</div>
      </section>
      {footer}
    </div>
  )
}
