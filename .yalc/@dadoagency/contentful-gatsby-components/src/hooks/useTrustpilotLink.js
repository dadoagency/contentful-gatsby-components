import { useStaticQuery, graphql } from "gatsby"
const useTrustpilotLink = () => {
  const data = useStaticQuery(graphql`
    query tpMeta {
      metadata: site {
        siteMetadata {
          compliance {
            trustpilot
          }
        }
      }
    }
  `)

  return data.metadata.siteMetadata.compliance.trustpilot
}

export default useTrustpilotLink
