/*
const chunk2 = (columns, array) => {
  let array_of_arrays = []
  let i, j, temparray
  const count = Math.round(array.length / columns)

  for (i = 0, j = array.length; i < j; i += count) {
    temparray = array.slice(i, i + count)
    array_of_arrays.push(temparray)
  }

  return array_of_arrays
}*/

export const chunk = (array, groupSize) => {
  const groups = []
  for (let i = 0; i < array.length; i += groupSize) {
    groups.push(array.slice(i, i + groupSize))
  }
  return groups
}
export const sum = array =>
  array.reduce((accumulator, currentValue) => accumulator + currentValue)

const carouselFormatters = {
  getAltText: ({ data, index }) => data.caption || `${index + 1}. kép`,
  getNextLabel: ({ currentIndex, views }) =>
    `Mutasd a(z) ${currentIndex + 2}. képet a(z) ${views.length} közül`,
  getPrevLabel: ({ currentIndex, views }) =>
    `Mutasd a(z) ${currentIndex}. képet a(z) ${views.length} közül`,
  getNextTitle: () => "Következő (jobbra nyíl)",
  getPrevTitle: () => "Előző (balra nyíl)",
  getCloseLabel: () => "Bezárás (esc)",
  getFullscreenLabel: ({ isFullscreen }) =>
    isFullscreen
      ? "Kilépés a teljes képernyős nézetből (f)"
      : "Teljes képernyőre váltás (f)",
}
export default carouselFormatters

export const ParseOnSuccess = str => {
  try {
    if (String(str).length() !== 0) return JSON.parse(str)
    else return null
  } catch (error) {
    console.warn("Error on trying to parse the string: " + str)
    return null
  }
}
