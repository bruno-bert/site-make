import styled from "styled-components"

export const HeroWrapper = styled.div`
  div {
    position: relative;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    z-index: 1;
  }

  div:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: #000000;
    opacity: 0.4;
  }

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 5em;
    font-weight: 900;
    letter-spacing: 2px;
    color: #fff;
  }

  p {
    font-family: "Montserrat", sans-serif;
    font-size: 1.5em;
    color: #fff;
  }

  .dot {
    display: inline-block;
    border: 5px solid #ffffff;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-left: 5%;
    background: #a1c4fd;
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#a1c4fd),
      to(#c2e9fb)
    );
    background: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#a1c4fd', endColorstr='#c2e9fb', GradientType=1);
  }
`
