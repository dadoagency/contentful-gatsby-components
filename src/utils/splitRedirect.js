export function getRedirectDestination(candidates) {
  return candidates && candidates[Math.floor(Math.random() * candidates.length)]
}

export function getQueryParam(keyVals) {
  const params = new URLSearchParams(document.location.search)
  for (const param of keyVals) {
    params.set(param.key, param.value)
  }
  return `?${params.toString()}`
}
