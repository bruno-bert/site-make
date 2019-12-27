import styled from "styled-components"

export default styled.header.attrs(props => ({
  id: props.id,
}))`
  .navbar {
    ul {
      li {
        a {
          color: ${props =>
            props.styles &&
            props.styles.color &&
            props.styles.colors.secondaryColor};
          font-family: ${props =>
            props.styles &&
            props.styles.typography &&
            props.styles.typography.fontFamily};
        }

        a:hover {
          color: ${props =>
            props.styles &&
            props.styles.colors &&
            props.styles.colors.primaryColor};
        }
      }
    }
  }

  #menuToggle {
    background: ${props =>
      props.styles && props.styles.colors && props.styles.colors.primaryColor};
  }
`
