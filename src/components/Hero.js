import React from "react"
import { SectionFromCms } from "../helpers/CmsHelper"
import Image from "./Image"

export default function Hero(props) {
  const meta = SectionFromCms(props, "hero")
  let logo = null

  if (meta.logoImage) {
    try {
      logo = require(`../images/${meta.logoImage}`)
    } catch (error) {
      console.error("Could not load logo: " + error)
    }
  }

  return (
    <>
      {logo && (
        <Image
          className="logo"
          alt="logo"
          src={meta.logoImage}
          srcObject={logo}
        />
      )}

      <h1 dangerouslySetInnerHTML={{ __html: meta.title }}>{}</h1>
      <p>{meta.subTitle}</p>
    </>
  )
}
