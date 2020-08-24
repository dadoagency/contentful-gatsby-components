Storybook: https://storybook--5f43c1219b70f800227245f3.chromatic.com

Chromatic: https://chromatic.com/library?appId=5f43c1219b70f800227245f3&branch=storybook

## How to install

`yarn add @dadoagency/contentful-gatsby-components`

### Edit gatsby config

**IMPORTANT:**

You need to specify the a URL in the Trustpilot compliance metadata otherwise the project will not build.

```
  siteMetadata: {
    ...,
    compliance: {
      trustpilot: "https://www.trustpilot.com/review/thepetlabco.com",
    },
  },
```

add to the plugins list:

```
module.exports = {
  ...
  plugins: [
        `@dadoagency/contentful-gatsby-components`,
  ]
}
```

## How to develop

```
yarn
yarn link
```

### TODO:

---

- [ ] tp widgets
- [ ] write tests
- [ ] fix errors
