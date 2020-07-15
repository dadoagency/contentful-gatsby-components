export function getRedirectDestination(candidates) {
  return candidates && candidates[Math.floor(Math.random() * candidates.length)]
}

export function getQueryParam(utm) {
  const params = new URLSearchParams(document.location.search)
  params.set("id", utm)
  params.set("utm_source", utm)
  params.set("utm_medium", utm)
  return `?${params.toString()}`
}
