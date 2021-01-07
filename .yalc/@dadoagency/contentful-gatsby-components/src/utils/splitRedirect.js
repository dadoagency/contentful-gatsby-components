export function getRedirectDestination(candidates) {
  return candidates && candidates[Math.floor(Math.random() * candidates.length)]
}

// takes in a set of key-value pairs
// returns a query param stringified version
// of keyVals concatenated with any currently
// set browser query params
export function getQueryParam(keyVals) {
  const params = new URLSearchParams(document.location.search)
  if (keyVals) {
    for (const param of keyVals) {
      params.set(param.key, param.value)
    }
  }
  return `?${params.toString()}`
}
