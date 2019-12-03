import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"

import * as styles from "../styles"
import GlobalStyle from "../styles/GlobalStyle"
import StyleBuilder from "../helpers/StyleBuilder"
import { useMetaData } from "../hooks/use-meta"

/** This Container will wrap all elements of the page */
const LayoutWrapper = styled.div`
 
`

const Layout = ( { children } ) => {
  const data = useMetaData()
  const theme = StyleBuilder(styles, data.site.siteMetadata)
 
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { metadata: data })
  );

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LayoutWrapper>
          <main>{ childrenWithProps } </main>
        </LayoutWrapper>
      </ThemeProvider>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
