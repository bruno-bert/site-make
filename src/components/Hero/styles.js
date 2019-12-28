import styled from "styled-components"

export default styled.div.attrs(props => ({
  id: props.id,
}))`
  &:after {
    background: ${props =>
      props.styles &&
      props.styles.typography &&
      props.styles.typography.backgroundColor};
  }

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
  }

  .social-media {
    i {
      color: set-text-color(
        ${props =>
          props.styles &&
          props.styles.colors &&
          props.styles.colors.backgroundColor}
      );

      &:hover {
        color: ${props =>
          props.styles &&
          props.styles.colors &&
          props.styles.colors.primaryColor};
      }
    }
  }

  .cta {
    box-shadow: 0 20px 18px
      rgba(
        ${props =>
          props.styles &&
          props.styles.colors &&
          props.styles.colors.primaryColor},
        0.2
      );
    background: ${props =>
      props.styles && props.styles.colors && props.styles.colors.primaryColor};
    font-family: ${props =>
      props.styles && props.styles.colors && props.styles.colors.fontFamily};
  }
`
