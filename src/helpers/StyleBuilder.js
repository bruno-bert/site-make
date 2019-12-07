/** not in use  */

/** This Builder merges the styles defined in the project
 * with the styles defined in the cms or in site metadata  */
const StyleBuilder = (styles, metadata) => {
  const theme = styles.themes[metadata.theme]

  return {
    ...styles,
    ...theme,
  }
}

export default StyleBuilder
