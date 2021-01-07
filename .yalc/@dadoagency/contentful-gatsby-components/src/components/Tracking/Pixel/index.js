import { useEffect } from "react"

const Pixel = ({ pixelId }) => {
  //load script on page
  useEffect(() => {
    fbPixel(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    )
  }, [])

  //reinit and fire track event when ID changes
  useEffect(() => {
    window.fbq("init", pixelId)
    window.fbq("track", "PageView")
  }, [pixelId])
  return null
}

function fbPixel(f, b, e, v, n, t, s) {
  if (f.fbq) return
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  }
  if (!f._fbq) f._fbq = n
  n.push = n
  n.loaded = !0
  n.version = "2.0"
  n.queue = []
  t = b.createElement(e)
  t.async = !0
  t.src = v
  s = b.getElementsByTagName(e)[0]
  s.parentNode.insertBefore(t, s)
}

export default Pixel
