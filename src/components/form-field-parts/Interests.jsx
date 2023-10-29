import Interest from './Interest'
import AddBtn from './AddBtn'

export default function Interests({ interest, dispatch }) {
  function inputChangeHandler(e, index) {
    const newInterest = [...interest]
    newInterest[index] = e.target.value
    dispatch({ type: 'setInterests', payLoad: newInterest })
  }
  function deleteClickHandler(index) {
    const newInterest = [...interest]
    newInterest.splice(index, 1)
    dispatch({ type: 'setInterests', payLoad: newInterest })
  }
  function addHandler(e, max) {
    if (interest.length > max) {
      dispatch({
        type: 'err',
        payLoad: `Error: you can't have more than ${max} items`,
      })
      return
    }
    dispatch({ type: 'setInterests', payLoad: [...interest, e.target.value] })
  }
  return (
    <>
      {interest.map((interest, i) => (
        <Interest
          deleteClickHandler={deleteClickHandler}
          interest={interest}
          inputChangeHandler={inputChangeHandler}
          key={i}
          i={i}
        />
      ))}

      <AddBtn onClick={(e) => addHandler(e, 4)}>Skills</AddBtn>
    </>
  )
}
