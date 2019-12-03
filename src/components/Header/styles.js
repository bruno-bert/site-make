import styled from "styled-components"

export const HeaderWrapper = styled.div`
 
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 padding: .8em 0;
 display: flex;
 justify-content: space-between;
 z-index: 9999;
 background-color: transparent;
 -webkit-transition: 0.3s;
 transition: 0.3s;
 border-bottom: 1px solid rgba(255, 255, 255, 0.2);
 
 .ul li a {
    color: #ffffff;
  background: none;
  text-transform: uppercase;
  font-weight: 400;
  background: transparent;
  border-bottom: 2px solid transparent;
 }

 .hide-mobile {
     display: none
 } 

 .menu-icon {
     margin-top: 35%;
 }

 
`
