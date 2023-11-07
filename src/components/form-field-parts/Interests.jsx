import Interest from './Interest'
import AddBtn from './AddBtn'
import { useFormData } from '../../contexts/FormDataContext'

export default function Interests() {
  const { data, dispatch } = useFormData()

  const { interests } = data

  function inputChangeHandler(e, index) {
    const newInterest = [...interests]
    newInterest[index] = e.target.value
    dispatch({ type: 'setInterests', payLoad: newInterest })
  }
  function deleteClickHandler(index) {
    const newInterest = [...interests]
    newInterest.splice(index, 1)
    dispatch({ type: 'setInterests', payLoad: newInterest })
  }
  function addHandler(e, max) {
    if (interests.length > max) {
      dispatch({
        type: 'err',
        payLoad: `Error: you can't have more than ${max} items`,
      })
      return
    }
    dispatch({ type: 'setInterests', payLoad: [...interests, e.target.value] })
  }
  return (
    <>
      {interests.map((interest, i) => (
        <Interest
          deleteClickHandler={deleteClickHandler}
          interest={interest}
          inputChangeHandler={inputChangeHandler}
          key={i}
          i={i}
        />
      ))}

      <AddBtn onClick={(e) => addHandler(e, 7)}>Interest</AddBtn>
    </>
  )
}
