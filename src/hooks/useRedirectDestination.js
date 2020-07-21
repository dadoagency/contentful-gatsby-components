import { useEffect, useContext } from "react"
import PageContext from "../context/PageContext"
import { getRedirectDestination, getQueryParam } from "../utils/splitRedirect"

const useRedirectDestination = candidates => {
  const { setRedirectDestination } = useContext(PageContext)

  useEffect(() => {
    if (candidates && candidates.length > 0) {
      const redirectDestination = getRedirectDestination(candidates)
      if (
        redirectDestination &&
        redirectDestination.url &&
        redirectDestination.utm
      ) {
        const { url, utm } = redirectDestination
        const queryString = getQueryParam(utm)
        window.history.replaceState(null, null, queryString)
        setRedirectDestination(url + queryString)
      }
    }
  }, [setRedirectDestination, candidates])
}

export default useRedirectDestination
