import React, { useState } from "react"

const defaultState = {
  redirectDestination: "default",
}

const PageContext = React.createContext(defaultState)

const PageProvider = ({ children }) => {
  const [redirectDestination, setRedirectDestination] = useState("")

  return (
    <PageContext.Provider
      value={{
        redirectDestination,
        setRedirectDestination,
      }}
    >
      {children}
    </PageContext.Provider>
  )
}

export default PageContext

export { PageProvider }
