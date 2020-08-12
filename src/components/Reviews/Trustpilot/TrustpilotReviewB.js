import React from "react"
import Image from "../../Image"
import { useStaticQuery, graphql } from "gatsby"
import useTrustpilotLink from "../../../hooks/useTrustpilotLink"

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
  const url = useTrustpilotLink()
  return (
    <TrustpilotReviewBPure
      tpUrl={url}
      logo={data.tp.childImageSharp.fixed}
      body={body}
      title={title}
      starsLogo={data.stars.childImageSharp.fixed}
    />
  )
  // return (
  //   <div className="righttestibox trustpilot-review-b">
  //     <div className="text-center">
  //       <a href={url}>
  //         <Image fixed={data.tp.childImageSharp.fixed} alt="petlab logo" />
  //       </a>
  //     </div>
  //     <div>{body}</div>
  //     <div className="user">
  //       <strong>{title}</strong>
  //       <Image fixed={data.stars.childImageSharp.fixed} alt="petlab logo" />
  //     </div>
  //   </div>
  // )
}

export const TrustpilotReviewBPure = ({
  tpUrl,
  logo,
  body,
  title,
  starsLogo,
}) => (
  <div className="righttestibox trustpilot-review-b">
    <div className="text-center">
      <a href={tpUrl}>
        <Image fixed={logo} alt="trustpilot logo" />
      </a>
    </div>
    <div>{body}</div>
    <div className="user">
      <strong>{title}</strong>
      <Image fixed={starsLogo} alt="petlab logo" />
    </div>
  </div>
)

export default TrustpilotReviewB
