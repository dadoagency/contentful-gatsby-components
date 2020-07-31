import React from "react"
import PropTypes from "prop-types"

const Footer = ({ companyDetails, footerLinks, footerBody }) => (
  <footer className="site-footer-container">
    <div className="site-footer-wrapper">
      <div className="copyrights">
        <p>
          Copyright © {new Date().getFullYear()}{" "}
          <a href={companyDetails.url}>{companyDetails.name}</a>
        </p>
      </div>
      <div className="footer-nav">
        {footerLinks &&
          footerLinks.map(link => (
            <a key={`footer-link-${link.to}`} href={link.to}>
              {link.text}
            </a>
          ))}
      </div>
      <div className="footer-msg">{footerBody}</div>
    </div>
  </footer>
)

Footer.propTypes = {
  companyDetails: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  footerLinks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    })
  ),
  footerBody: PropTypes.object,
}

export default Footer
