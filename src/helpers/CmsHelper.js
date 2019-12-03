/** This helper gets the props object and deeps into it to find 
 *  and return only the object that contains the site metadata
 *  this is helpful when changing the site data source from local medatata to real cms  */
const CmsFromProps = (props) => {
  return props.metadata.site.siteMetadata
}

const SectionFromCms = (props, sectionId ) => {
  const meta = CmsFromProps(props)
  const [ sectionData ] = meta.sections.filter( (section) => section.type === sectionId  )
  return sectionData[sectionId]
}

export { CmsFromProps, SectionFromCms }
