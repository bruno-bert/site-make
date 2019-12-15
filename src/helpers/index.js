const chunk = (columns, array) => {
  let array_of_arrays = []
  let i, j, temparray
  const count = Math.round(array.length / columns)

  for (i = 0, j = array.length; i < j; i += count) {
    temparray = array.slice(i, i + count)
    array_of_arrays.push(temparray)
  }

  return array_of_arrays
}

export { chunk }
