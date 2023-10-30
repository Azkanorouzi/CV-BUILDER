import TextInput from './TextInput'
import AddBtn from './AddBtn'
import TimesClose from './TimesClose'

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
          {i > 0 && <TimesClose handler={() => deleteClickHandler(i)} />}
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
      <AddBtn onClick={(e) => addHandler(e, 4)}>Languages</AddBtn>
    </>
  )
}
