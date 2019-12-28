import styled from "styled-components"

export default styled.div.attrs(props => ({
  id: props.id,
}))`

  /*background: ${props => props.styles && props.styles.background};*/
  display: flex;
  flex-flow: column wrap;
  
  opacity: ${props => props.styles && props.styles.opacity};
`
