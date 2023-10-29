import { useState } from 'react'

/**
 * THIS higher order will return a function that will be used to handle input values
 * @param {string} propName
 * @param {function} setter
 * @param {object} data
 * @returns a handler function
 */
export function dataChangeHandler(
  propName,
  dispatch,
  data,
  type = 'setGeneralData'
) {
  return function (e) {
    dispatch({
      type,
      payLoad: { ...data, [propName]: e.target.value },
    })
  }
}
/**
 * this function will return an array with the specified length
 * @param {number} length the length of desired array
 * @returns {array} an array with the given length
 */
export function returnArrWithLength(length) {
  if (length < 0) return []
  return Array.from({ length }).fill('.')
}

export function GenerateEducation() {
  return {
    institutionName: '',
    degreeTitle: '',
    startingDate: '',
    endingDate: '',
    id: crypto.randomUUID(),
  }
}

export function GenerateJob() {
  return {
    position: '',
    company: '',
    location: '',
    startingDate: '',
    endingDate: '',
    description: '',
    id: crypto.randomUUID(),
  }
}

export function itemInputChangeHandler(propName, data, setter, index) {
  return function (e) {
    const newObj = { ...data[index], [propName]: e.target.value }
    const newData = [...data]
    newData[index] = newObj
    setter(newData)
  }
}
export function deleteItemClickHandler(data, setter, index) {
  const newData = [...data]
  newData.splice(index, 1)
  setter(newData)
}

export function useLocalStorage(key, defaultValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    try {
      const value = localStorage.getItem(key)
      /* if the value is already in local storage it will return it otherwise set the default value and then return it */
      if (value) {
        return JSON.parse(value)
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue))
        return defaultValue
      }
    } catch (e) {
      localStorage.setItem(key, JSON.stringify(defaultValue))
      return defaultValue
    }
  })
  const setLocalStorageStateValue = (valueOrFn) => {
    let newValue
    if (typeof valueOrFn === 'function') {
      const fn = valueOrFn
      newValue = fn(localStorageValue)
    } else {
      newValue = valueOrFn
    }
    localStorage.setItem(key, JSON.stringify(newValue))
    setLocalStorageValue(newValue)
  }
  return [localStorageValue, setLocalStorageStateValue]
}
export function shouldTextBeDark(color) {
  const decimalColor = parseInt(color.slice(1), 16)
  if (decimalColor >= 8947848) return true
  return false
}
