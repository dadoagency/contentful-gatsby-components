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
