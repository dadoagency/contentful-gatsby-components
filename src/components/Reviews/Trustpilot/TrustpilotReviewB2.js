import React from "react"
import Image from "../../Image"
import { useStaticQuery, graphql } from "gatsby"
import useTrustpilotLink from "../../../hooks/useTrustpilotLink"

const TrustpilotReviewB2 = ({ title, body, ...props }) => {
  const data = useStaticQuery(graphql`
    query trustPilotB2 {
      stars: file(relativePath: { eq: "trustpilot-stars.png" }) {
        childImageSharp {
          fixed(width: 106) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      tp: file(relativePath: { eq: "trustpilot.png" }) {
        childImageSharp {
          fixed(width: 90) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `)
  const url = useTrustpilotLink()
  return (
    <TrustpilotReviewB2Pure
      logoLink={url}
      logo={data?.tp?.childImageSharp?.fixed}
      body={body}
      title={title}
      starsLogo={data?.stars?.childImageSharp?.fixed}
    />
  )
}

export const TrustpilotReviewB2Pure = ({
  logoLink,
  logo,
  body,
  title,
  starsLogo,
}) => (
<div className="review trustpilot-review-b v2" style={{
    padding: '20px 0'
}}>
    <div>
        <h5 style={{
                fontSize: '20px',
                lineHeight: '0px',
                color: '#173752',
                margin: 0
            }}>{title}</h5>
        <div style={{
            marginBottom: '10px'
        }}>{body}</div>
        <div class="stars" style={{
            float: 'left'
        }}><Image fixed={starsLogo} alt="petlab logo" /></div>
        <div class="logo" style={{
            float: 'right'
        }}><Image fixed={logo} alt="trustpilot logo" /></div>
        <div style={{ clear: 'both' }}></div>
    </div>
</div>
)

export default TrustpilotReviewB2
