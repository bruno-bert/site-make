import React from "react"
import Image from "./Image"

export default function Hero(props) {
  const data = props.data
  let logo = null

  if (data.logoImage) {
    try {
      logo = require(`../images/${data.logoImage}`)
    } catch (error) {
      console.error("Could not load logo: " + error)
    }
  }

  const titleStyle =
    data.styles && data.styles.titleStyle
      ? JSON.parse(data.styles.titleStyle)
      : null

  const subTitleStyle =
    data.styles && data.styles.subTitleStyle
      ? JSON.parse(data.styles.subTitleStyle)
      : null

  const logoStyle = data.styles && data.styles.logoStyle

  const socialMedia = data.socialMedia
  const callToAction = data.callToAction

  return (
    <>
      {logo && (
        <Image
          imgStyle={logoStyle}
          className="logo"
          alt="logo"
          src={data.logoImage}
          srcObject={logo}
        />
      )}

      <h1 style={titleStyle} dangerouslySetInnerHTML={{ __html: data.title }}>
        {}
      </h1>
      <p style={subTitleStyle}>{data.subTitle}</p>

      {socialMedia && (
        <ul className="social-media">
          {socialMedia.map(item => (
            <li>
              <i className={item.className}></i>
            </li>
          ))}
        </ul>
      )}

      {callToAction && (
        <a
          id={callToAction.id}
          href={callToAction.href}
          class="button instagram"
        >
          <span class="gradient"></span>
          {callToAction.text}
        </a>
      )}
    </>
  )
}
