/**
 * THIS higher order will return a function that will be used to handle input values
 * @param {string} propName
 * @param {function} setter
 * @param {object} data
 * @returns a handler function
 */
export function dataChangeHandler(propName, setter, data) {
  return function (e) {
    setter({ ...data, [propName]: e.target.value })
  }
}
/**
 * this function will return an array with the specified length
 * @param {number} length the length of desired array
 * @returns {array} an array with the given length
 */
export function returnArrWithLength(length) {
  console.log(length)
  if (length < 0) return []
  return Array.from({ length }).fill('.')
}

export function GenerateEducation() {
  return {
    institutionName: '',
    degreeTitle: '',
    startingDate: '',
    endingDate: '',
  }
}
