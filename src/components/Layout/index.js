import React from "react"
import Header from "../Header"
import { Helmet } from "react-helmet"
import * as S from "./Layout.style"

export default ({
  children,
  className,
  locale,
  fixedHeader,
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
      <Header
        fixedHeader={fixedHeader}
        logoPosition={logoPosition}
        headerText={headerText}
        logo={logo}
        extra={extra}
      />
      <S.Section fixedHeader={fixedHeader}>
        <div className="site-data-wrapper section">{children}</div>
      </S.Section>
      {footer}
    </div>
  )
}
