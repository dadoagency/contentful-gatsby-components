const React = require("react")
const gatsby = jest.requireActual("gatsby")

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement("a", {
        ...rest,
        href: to,
      })
  ),
  StaticQuery: jest.fn(),
  // useStaticQuery: jest.fn(),
  useStaticQuery: jest.fn(() => {
    return {
      amazonLogo: {
        childImageSharp: {
          fixed: {
            width: 93,
            height: 30,
            base64:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABiUlEQVQY02NgAAItLS0DbW1tRwd7e1Y9PT0dINtER0fHUFdXVxHI5wHK+xkaGooCxZXU1NRcgeISQKwA5FtNmjSJEagGpN8sKyuLgcHCwoIdqLldQ0PjBFBjDpDeDsSHgfiAurr6En19fQ9NTc09QPYiU1MTIKV2B8hvAOJZQDWrgHqqgfQ+ID4OMhTkOiktLc1+oMAaIJ6so6U5CejEGiC7Eqh7BlBjMVDNdKDLNqppaLooqajv0tLW9gbKzweKJwDpY0C5eiDdDuSHMABNlQdq3AXUuBAo0CAmr1miqKqdpaejVaCrrdmso6UBtEBzk4aG5gRgYLRaGWrsNtDXTQKqnwRyBFB/IlB/FZBfAfSpKygIGTwdLXgYGPRYfy93Vnk50yrgWr+VBAMK0GEBkf9X2tv+X2nV+X+FtRqI72xtKAiibe3s2FxcXVhcXV2ZGJSVlVG0/l5kaf1jvlnbj/mmE37MM6n4Ptck9+9C08rv80x7vs23iPkwz8blw1xLIZh6KUkpRmT9APF9cs4bmVUCAAAAAElFTkSuQmCC",
            src: "",
            srcSet: "",
          },
        },
      },
      star: {
        childImageSharp: {
          fixed: {
            base64:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsSAAALEgHS3X78AAACPElEQVQ4y41UPU8cMRC93UNEwsNHkQjaKEkRiSICRJ02AgmB+B0UUbrkP6QjBV0QuhSUiAZ5+QifAUGTtBQUSJHSRQhyx655Mx4v3jsgrPTk8Xr85s3Y41rtjs9lJGNhTSpza8aACbX1H9Ue/bGzW+/hse4DmAbsXyEYSMugj/qKzERKzCvg0u2RwzipAeq69h9lnkhV6qaMvrh9kG0zIW2pX8JZSOB2pSLfp5AAqcCabq+UXhSsbl3Irt2OqHyngZ5wSQD2T8oyPFQLOM+7HyDJTAsbrjXtjXtLFUrgZoX4KfAamATmkM48Nl94daYAaYEAGDkANYAPmM8Cb0A0BJ+ukPJ74BQO57KZa3UAHAIlmZAwPCmvs3Iuwab4/AHOEPQzpzWAiXXHvbzQBHJNsXlLpgpvbV5vYcwx/hNyS6ewX8YnvKwLEZGkWFXoicO/ptwAa05g94euSCPSb5JqRnlbqncAhyQCzBHQp4dYD0RpdI2+uu+yIW9TF9URa95nG3ZvO1n1IlvTj8XfvtiUdxDaKIilEd3TVelvf7kpNP2w1DHebKmo2JzurtgzQV2lDaXhQ39mZsoXGp3hiVpCtCH1aul9bGqtP4XsQqYxaUj5o9wzS1dSx4Nw8vTXd43U7kqDNsIZVJ4z/ygEQlosHwMpPK0gyGhh6Tn8FuRA9vRSWzrUnq91pBzZP/WSr6Gl3nb2txmGz5J/ffBwWBr0fUxJ7JSo0mewWdF0pD4tXxQti+4Zx3wVGFGVcqg38UaA6SfLuosAAAAASUVORK5CYII=",
            width: 20,
            height: 19,
            src:
              "/static/15cf3f5b820b523c44b22fbadeb90e67/b22c5/review_star.png",
            srcSet:
              "/static/15cf3f5b820b523c44b22fbadeb90e67/b22c5/review_star.png 1x,\n/static/15cf3f5b820b523c44b22fbadeb90e67/a74cd/review_star.png 1.5x,\n/static/15cf3f5b820b523c44b22fbadeb90e67/0efb1/review_star.png 2x",
            srcWebp:
              "/static/15cf3f5b820b523c44b22fbadeb90e67/f7a9a/review_star.webp",
            srcSetWebp:
              "/static/15cf3f5b820b523c44b22fbadeb90e67/f7a9a/review_star.webp 1x,\n/static/15cf3f5b820b523c44b22fbadeb90e67/c6edb/review_star.webp 1.5x,\n/static/15cf3f5b820b523c44b22fbadeb90e67/44b89/review_star.webp 2x",
          },
        },
      },
      fb: {
        childImageSharp: {
          fixed: {
            base64:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAA8UlEQVQY03WPvUoEMRSFp/MBfAQfQEszybiw2AhaKkwyP4KytSJYWa+Ntbq5yUyhsCBaqPhTKKKVWCiKhbAv4+dab+Bwzz3ncJIkWRmNsjKq926nkgmHzDLoTfIX6mZOF6E/XlTun5X111ndrqROeosbJ9OplV1dxDVdxiWCBfo2uS/4ame9ncHvZ1WcNWUweDupC5vzuW9M1XaT1PpzEEzVVBT/EPi7QCjsUDKCv6E9MQO44TefKh8cM18ofiCDLq9438yrRDu/BfZZzsCHdnKPeWTK2CX8TtkBLztEG+KfUnKHPlBOLuEXY27l8b9Uhr9uY3UFr+e/9wAAAABJRU5ErkJggg==",
            width: 73,
            height: 15,
            src: "/static/d1010c6ec089cff141523eb269214ad5/fa4ca/fb.png",
            srcSet: "/static/d1010c6ec089cff141523eb269214ad5/fa4ca/fb.png 1x",
            srcWebp: "/static/d1010c6ec089cff141523eb269214ad5/83af0/fb.webp",
            srcSetWebp:
              "/static/d1010c6ec089cff141523eb269214ad5/83af0/fb.webp 1x",
          },
        },
      },
      facebook: {
        childImageSharp: {
          fixed: {
            base64:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAA8UlEQVQY03WPvUoEMRSFp/MBfAQfQEszybiw2AhaKkwyP4KytSJYWa+Ntbq5yUyhsCBaqPhTKKKVWCiKhbAv4+dab+Bwzz3ncJIkWRmNsjKq926nkgmHzDLoTfIX6mZOF6E/XlTun5X111ndrqROeosbJ9OplV1dxDVdxiWCBfo2uS/4ame9ncHvZ1WcNWUweDupC5vzuW9M1XaT1PpzEEzVVBT/EPi7QCjsUDKCv6E9MQO44TefKh8cM18ofiCDLq9438yrRDu/BfZZzsCHdnKPeWTK2CX8TtkBLztEG+KfUnKHPlBOLuEXY27l8b9Uhr9uY3UFr+e/9wAAAABJRU5ErkJggg==",
            width: 73,
            height: 15,
            src: "/static/d1010c6ec089cff141523eb269214ad5/fa4ca/fb.png",
            srcSet: "/static/d1010c6ec089cff141523eb269214ad5/fa4ca/fb.png 1x",
            srcWebp: "/static/d1010c6ec089cff141523eb269214ad5/83af0/fb.webp",
            srcSetWebp:
              "/static/d1010c6ec089cff141523eb269214ad5/83af0/fb.webp 1x",
          },
        },
      },
    }
  }),
}