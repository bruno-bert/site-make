import React from "react"
import PropTypes from "prop-types"

import { useMetaData } from "../hooks/use-meta"

const Layout = ({ children }) => {
  const data = useMetaData()

  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { metadata: data })
  )

  return (
    <React.Fragment>
      <main>{childrenWithProps} </main>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
