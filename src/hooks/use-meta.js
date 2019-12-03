/** This hook gets specific image */ 
import { useStaticQuery, graphql } from "gatsby"
import "./fragments/fragment-meta-data"
export const useMetaData = ( ) => {

 const data = useStaticQuery(  graphql` 
 query {
  site {
    ...metadata
  }
}
` )
  
 return data
}