export const getFirstValue = obj => {
  return Object.keys(obj).length >= 1 ? obj[Object.keys(obj)[0]] : null
}

export const getLocaleValueOrDefault = obj => {
  if (typeof window !== "undefined") {
    const params = new URLSearchParams(document.location.search)
    const defaultLocale = Object.keys(obj)[0]
    let locale = defaultLocale
    if (params.has("locale")) {
      //see if obj has the requested locale
      const requestedLocale = params.get("locale")
      if (obj.hasOwnProperty(requestedLocale)) {
        locale = requestedLocale
      }
    }
    return obj[locale]
  }
}
