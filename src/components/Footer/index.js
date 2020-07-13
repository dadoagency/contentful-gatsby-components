import React from "react"

export default ({ references }) => (
  <footer className="site-footer-contianer">
    <div className="site-footer-wrapper">
      <div className="copy-wrights">
        <p>
          Copyright © {new Date().getFullYear()}{" "}
          <a href="https://thepetlabco.com">Petlab Co.</a>
        </p>
      </div>
      <div className="footer-nav">
        <a href="https://thepetlabco.com/pages/our-story">About Us</a>
        <a href="https://thepetlabco.com/pages/faq">FAQ</a>
        <a href="https://thepetlabco.com/pages/terms-conditions">Terms</a>
        <a href="https://thepetlabco.com/pages/privacy-statement">Privacy</a>
      </div>
      <div className="footer-msg">
        <p>
          *Results May Vary. Not intended for human consumption. Please consult
          your veterinarian regarding any change in treatment or
          supplementation.
        </p>
        {references
          ? references.map((reference, index) => {
              return (
                <p key={index}>
                  {reference.displayText}{" "}
                  <a href={reference.url} target="_blank" rel="noreferrer">
                    {reference.url}
                  </a>
                </p>
              )
            })
          : null}

        <p>Disclaimer: This is an advertisement by Petlab Co.</p>
      </div>
    </div>
  </footer>
)
