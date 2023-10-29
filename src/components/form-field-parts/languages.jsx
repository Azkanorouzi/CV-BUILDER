import TextInput from '../form/TextInput'

export default function Languages({ languages, dispatch }) {
  function inputChangeHandler(e, index) {
    const newLanguages = [...languages]
    newLanguages[index] = e.target.value
    dispatch({ type: 'setLanguages', payLoad: newLanguages })
  }
  function deleteClickHandler(index) {
    const newLanguages = [...languages]
    newLanguages.splice(index, 1)
    dispatch({ type: 'setLanguages', payLoad: newLanguages })
  }
  function addHandler(e, max) {
    if (languages.length > max) {
      dispatch({
        type: 'err',
        payLoad: `Error: you can't have more than ${max} items`,
      })
      return
    }
    dispatch({ type: 'setLanguages', payLoad: [...languages, e.target.value] })
  }
  return (
    <>
      {languages.map((language, i) => (
        <div
          className="bg-neutral p-3 flex flex-col gap-2 justify-center items-center rounded-2xl text-center relative"
          key={i}
        >
          {i > 0 && (
            <div onClick={() => deleteClickHandler(i)}>
              <i className="fa-solid fa-times text-danger absolute top-3 right-5 cursor-pointer"></i>
            </div>
          )}
          <fieldset className="flex gap-10">
            <TextInput
              placeholder={'English'}
              value={language}
              onChange={(e) => inputChangeHandler(e, i)}
            >
              language:{' '}
            </TextInput>
          </fieldset>
        </div>
      ))}

      <div className="divider"></div>
      <button
        className="btn btn-primary text-black"
        type="button"
        onClick={(e) => addHandler(e, 4)}
      >
        Add new Language
      </button>
    </>
  )
}
