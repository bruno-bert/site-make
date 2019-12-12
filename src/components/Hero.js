import React from "react"
import { SectionFromCms } from "../helpers/CmsHelper"

import Image from "./Image"
import heroLogo from "../images/landing/hero-logo.svg"

export default function Hero(props) {
  const meta = SectionFromCms(props, "hero")

  return (
    <>
      {meta.logoImage && <Image
        className="logo"
        alt="logo"
        src={meta.logoImage}
        srcObject={heroLogo}
      />}

      <h1 dangerouslySetInnerHTML={{ __html: meta.title }}>{}</h1>
      <p>{meta.subTitle}</p>
    </>
  )
}
