import React from "react"

export default ({ companyDetails, footerLinks, footerBody }) => (
  <footer className="site-footer-container">
    <div className="site-footer-wrapper">
      <div className="copyrights">
        <p>
          Copyright © {new Date().getFullYear()}{" "}
          <a href={companyDetails.url}>{companyDetails.name}</a>
        </p>
      </div>
      <div className="footer-nav">
        {footerLinks.map(link => (
          <a key={`footer-link-${link.to}`} href={link.to}>
            {link.text}
          </a>
        ))}
      </div>
      <div className="footer-msg">{footerBody}</div>
    </div>
  </footer>
)
