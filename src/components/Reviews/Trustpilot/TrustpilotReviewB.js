import React from "react"
import Image from "../../Image"
import { useStaticQuery, graphql } from "gatsby"

const TrustpilotReviewB = ({ title, body, ...props }) => {
  const data = useStaticQuery(graphql`
    query trustPilotB {
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
  return (
    <div className="righttestibox trustpilot-review-b">
      <div className="text-center">
        <Image fixed={data.tp.childImageSharp.fixed} alt="petlab logo" />
      </div>
      <p>{body}</p>
      <div className="user">
        <strong>{title}</strong>
        <Image fixed={data.stars.childImageSharp.fixed} alt="petlab logo" />
      </div>
    </div>
  )
}

export default TrustpilotReviewB
