import React from "react"
import postBodyComponents from "./src/data/postBodyComponents"
import headComponents from "./src/data/headComponents"

export const onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
  let jsxPostBodyComponents = []
  let jsxHeadComponents = []

  /** post body components */
  if (postBodyComponents) {
    if (postBodyComponents.scripts) {
      postBodyComponents.scripts.map(c => {
        if (c.src !== "") {
          jsxPostBodyComponents.push(
            <script
              key={c.id}
              id={c.id}
              type="text/javascript"
              src={c.src}
            ></script>
          )
        }
      })
    }

    if (postBodyComponents.stylesheets) {
      postBodyComponents.stylesheets.map(c => {
        if (c.href !== "") {
          jsxPostBodyComponents.push(
            <link key={c.href} href={c.href} rel="stylesheet"></link>
          )
        }
      })
    }
  }

  /** header components */
  if (headComponents) {
    if (headComponents.scripts) {
      headComponents.scripts.map(c => {
        if (c.src !== "") {
          jsxHeadComponents.push(
            <script
              key={c.id}
              id={c.id}
              type="text/javascript"
              src={c.src}
            ></script>
          )
        }
      })
    }

    if (headComponents.stylesheets) {
      headComponents.stylesheets.map(c => {
        if (c.href !== "") {
          jsxHeadComponents.push(
            <link key={c.href} href={c.href} rel="stylesheet"></link>
          )
        }
      })
    }
  }

  setHeadComponents(jsxHeadComponents)
  setPostBodyComponents(jsxPostBodyComponents)
}
