import { createContext, useContext, useReducer } from 'react'
import initialData from '../data/initialData'
import previewData from '../data/previewData'

const FormDataContext = createContext()

function reducer({ state, data }, { type, payLoad }) {
  switch (type) {
    case 'err':
      return { data: { ...data }, state: { ...state, err: payLoad } }
    case 'removeErr':
      return { data: { ...data }, state: { ...state, err: false } }
    case 'setStep':
      return { data: { ...data }, state: { ...state, currentStep: payLoad } }
    case 'newItem':
      return {
        state: { ...state },
        data: {
          ...data,
          [payLoad.propName]: [...data[payLoad.propName], payLoad.newItem],
        },
      }
    case 'setItems':
      return {
        state: { ...state },
        data: {
          ...data,
          [payLoad.propName]: [...payLoad.newItems],
        },
      }
    case 'deleteItem':
      return {
        state: { ...state },
        data: {
          ...data,
          [payLoad.propName]: payLoad.newItems,
        },
      }
    case 'setImg':
      return { state: { ...state }, data: { ...data, img: payLoad } }
    case 'setGeneralData':
      return { state: { ...state }, data: { ...data, generalData: payLoad } }
    case 'setContactData':
      return { state: { ...state }, data: { ...data, contactData: payLoad } }
    case 'setSkills':
      return { state: { ...state }, data: { ...data, skills: payLoad } }
    case 'setLanguages':
      return { state: { ...state }, data: { ...data, languages: payLoad } }
    case 'setInterests':
      return { state: { ...state }, data: { ...data, interests: payLoad } }
    case 'setPreview':
      return previewData
  }
}
function FormDataContextProvider({ children }) {
  const [{ state, data }, dispatch] = useReducer(reducer, initialData)

  function addNewItemHandler(data, setter, generator, max) {
    if (data.length === max) {
      dispatch({
        type: 'err',
        payLoad: `Error: you can't have more than ${max} items`,
      })
      return
    }
    const newItem = generator()
    dispatch({ type: 'newItem', payLoad: { propName: setter, newItem } })
  }

  function imgChangeHandler(e, target) {
    if (target ?? e.target?.files?.length) {
      const selectedFile = target?.files[0] ?? e.target.files[0]
      localStorage.removeItem('img')
      dispatch({ type: 'setImg', payLoad: URL.createObjectURL(selectedFile) })
    }
  }

  return (
    <FormDataContext.Provider
      value={{
        state,
        data,
        dispatch,
        addNewItemHandler,
        imgChangeHandler,
      }}
    >
      {children}
    </FormDataContext.Provider>
  )
}

function useFormData() {
  const formData = useContext(FormDataContext)
  if (formData === undefined)
    throw new Error("You're trying to access the form outside of it's context")
  return formData
}

export { useFormData, FormDataContextProvider }
