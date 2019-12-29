import styled from "styled-components"

export default styled.div.attrs(props => ({
  id: props.id,
}))`

/*
  h1 {
    font-family: ${props =>
      props.styles &&
      props.styles.typography &&
      props.styles.typography.fontFamily};

    color: ${props =>
      props.styles &&
      props.styles.colors &&
      props.styles.colors.secondaryColor};

    span {
      color: ${props =>
        props.styles &&
        props.styles.colors &&
        props.styles.colors.primaryColor};
    }
  }

  p {
    font-family: ${props =>
      props.styles &&
      props.styles.typography &&
      props.styles.typography.fontFamilySecondary};

    color: ${props =>
      props.styles &&
      props.styles.colors &&
      props.styles.colors.secondaryColor};
  }*/
`
