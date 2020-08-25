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
      metadata: {
        siteMetadata: {
          compliance: { trustpilot: "https://www.trustpilot.com/" },
        },
      },
      trustpilot: {
        childImageSharp: {
          fixed: {
            base64:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAABQklEQVQY0y2Py0oCARSGTwXdiMKN3aA2rYMW0Tv0CLUIegBdVDppGWEOQrhoZQ/gIvAy0jiXamYsJYiCLASDxAY0CjLKyNBRm9MZaHHgnJ//+38OAL/RokFIuV+6RE8MJAaBdzVI++0WvVFIuT5p2iC5EYTNNAhMDkTaUy6LeSKG/78N4gxYzh2hu3iCg7KvSiI3dxPGUCnTmcmELFPCdrpb9xdVXLyPWAFZCs2vFOK4/ihhn7RVIU2cvz7E/dKFOa0FTYg83+LlVxmH5J0qcA5uqRDDD+Ons3AVRkg6E1NasF5u1NCjqwjHa1kqyUffC5iu6Tgg+yrAOcXVhyS+Nb/N2cyBCaNne+0xlcUe0ftKbfFhzY+TKtsks0lwtFfaro0rbMemBehl5hwEz51dY9GuBCxGJ4YfUf04obBGv+xr/QFo2L5KxjR3fwAAAABJRU5ErkJggg==",
            width: 90,
            height: 17,
            src:
              "/static/3e37f12bdcbc6186e3f2de9be8302100/8099b/trustpilot-stars.png",
            srcSet:
              "/static/3e37f12bdcbc6186e3f2de9be8302100/8099b/trustpilot-stars.png 1x",
            srcWebp: null,
            srcSetWebp: null,
          },
        },
      },
      stars: {
        childImageSharp: {
          fixed: {
            base64:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAABQklEQVQY0y2Py0oCARSGTwXdiMKN3aA2rYMW0Tv0CLUIegBdVDppGWEOQrhoZQ/gIvAy0jiXamYsJYiCLASDxAY0CjLKyNBRm9MZaHHgnJ//+38OAL/RokFIuV+6RE8MJAaBdzVI++0WvVFIuT5p2iC5EYTNNAhMDkTaUy6LeSKG/78N4gxYzh2hu3iCg7KvSiI3dxPGUCnTmcmELFPCdrpb9xdVXLyPWAFZCs2vFOK4/ihhn7RVIU2cvz7E/dKFOa0FTYg83+LlVxmH5J0qcA5uqRDDD+Ons3AVRkg6E1NasF5u1NCjqwjHa1kqyUffC5iu6Tgg+yrAOcXVhyS+Nb/N2cyBCaNne+0xlcUe0ftKbfFhzY+TKtsks0lwtFfaro0rbMemBehl5hwEz51dY9GuBCxGJ4YfUf04obBGv+xr/QFo2L5KxjR3fwAAAABJRU5ErkJggg==",
            width: 106,
            height: 20,
            src:
              "/static/3e37f12bdcbc6186e3f2de9be8302100/1b8fb/trustpilot-stars.png",
            srcSet:
              "/static/3e37f12bdcbc6186e3f2de9be8302100/1b8fb/trustpilot-stars.png 1x",
            srcWebp:
              "/static/3e37f12bdcbc6186e3f2de9be8302100/eb523/trustpilot-stars.webp",
            srcSetWebp:
              "/static/3e37f12bdcbc6186e3f2de9be8302100/eb523/trustpilot-stars.webp 1x",
          },
        },
      },
      tp: {
        childImageSharp: {
          fixed: {
            base64:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABPklEQVQoz2MI3FjLAAMBQHbKswUMkjJSDBISEmAMAjAaBpDFkeXExcUhhgRuqmMF0qwBG2oZww60M/AwMDFISkkygRTANCFhRnQ+kjpGsMmBm+vZgAaWMlADAF3nDzRsOdDQV0FbGqYF72wyEuLks5eQlCwG2igPxKxQV7ACMReQrQ/EQkDMAcRKQGwJxJxAzAvEhgz+66r4gYadjjrW/d99bu4icNhISmgDJduBOAloSBKQdgHiCiAuAOI6IC4E4jgQGyjfBqTTgHQGkJ7E4L2shBloYBOQrgbiApCB0sryokDJLKAiKyAOAGKQ4dlA3ApkxwDpLhAfyK4H0iCfFALZiUA6B+RldqAruUAGRR7u4fffWM0CYktKSyF7lQ/IBnmXG4iZgdgJiGWhMQuKPF5oEHDAw9J7eSkLNeIEAEwdVryKCuM9AAAAAElFTkSuQmCC",
            width: 90,
            height: 37,
            src:
              "/static/ca264bd75dd191d289892bee83e52e55/8099b/trustpilot.png",
            srcSet:
              "/static/ca264bd75dd191d289892bee83e52e55/8099b/trustpilot.png 1x,\n/static/ca264bd75dd191d289892bee83e52e55/6b065/trustpilot.png 1.5x,\n/static/ca264bd75dd191d289892bee83e52e55/e0491/trustpilot.png 2x",
            srcWebp:
              "/static/ca264bd75dd191d289892bee83e52e55/ef0c7/trustpilot.webp",
            srcSetWebp:
              "/static/ca264bd75dd191d289892bee83e52e55/ef0c7/trustpilot.webp 1x,\n/static/ca264bd75dd191d289892bee83e52e55/88075/trustpilot.webp 1.5x,\n/static/ca264bd75dd191d289892bee83e52e55/1a890/trustpilot.webp 2x",
          },
        },
      },
    }
  }),
}
