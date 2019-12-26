import styled from "styled-components"

export default styled.header.attrs(props => ({
  id: props.id,
}))`
  .navbar {
    ul {
      li {
        a {
          color: ${props => props.styles.colors.primaryColor};
          font-family: ${props => props.styles.typography.fontFamily};
        }

        a:hover {
          color: ${props => props.styles.colors.secondaryColor};
        }
      }
    }
  }

  #menuToggle {
    background: ${props => props.styles.colors.secondaryColor};
  }
`
