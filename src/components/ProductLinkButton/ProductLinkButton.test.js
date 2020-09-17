import React from "react"
import ReactDOM from "react-dom"
import { ProductLinkButtonPure } from "./"

it("has an href", () => {
  const div = document.createElement("div")
  ReactDOM.render(
    <ProductLinkButtonPure
      cta="Click Me"
      redirectDestination="https://learnstorybook.com"
    ></ProductLinkButtonPure>,
    div
  )

  expect(
    div.querySelector('a[href="https://learnstorybook.com"]')
  ).not.toBeNull()
  expect(div.querySelector("p").textContent).toEqual("Click Me")
})
