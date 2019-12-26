import React from "react"
export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  console.log("pluginOptions", pluginOptions)
  setPostBodyComponents([
    <script
      key="setmore_script"
      id="setmore_script"
      type="text/javascript"
      src="https://my.setmore.com/webapp/js/src/others/setmore_iframe.js"
    ></script>,
  ])
}
