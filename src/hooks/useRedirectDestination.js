import { useState, useEffect, useContext } from "react"
import PageContext from "../context/PageContext"
import { getRedirectDestination, getQueryParam } from "../utils/splitRedirect"

const useRedirectDestination = candidates => {
  const { redirectDestination, setRedirectDestination } = useContext(PageContext)
  const [params, setParams] = useState(null)

  useEffect(() => {
    if (candidates && candidates.length > 0) {
      const redirectDestination = getRedirectDestination(candidates)
      if (redirectDestination && redirectDestination.url) {
        const { url, params } = redirectDestination
        let queryString = ""
        queryString = getQueryParam(params)
        window.history.replaceState(null, null, queryString)
        setParams(params)
        setRedirectDestination(url + queryString)
      }
    }
  }, [setRedirectDestination, candidates])

  return { url: redirectDestination, params}
}

export default useRedirectDestination
