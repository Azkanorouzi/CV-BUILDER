import TextInput from '../form/TextInput'

export default function Interests({ interest, setInterest, setErr }) {
  function inputChangeHandler(e, index) {
    const newInterest = [...interest]
    newInterest[index] = e.target.value
    setInterest(newInterest)
  }
  function deleteClickHandler(index) {
    const newInterest = [...interest]
    newInterest.splice(index, 1)
    setInterest(newInterest)
  }
  function addHandler(e, max) {
    if (interest.length > max) {
      setErr(`Error: you can't have more than ${max} items`)
      return
    }
    setInterest([...interest, e.target.value])
  }
  return (
    <>
      {interest.map((interest, i) => (
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
              value={interest}
              onChange={(e) => inputChangeHandler(e, i)}
            >
              Interest:{' '}
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
        Add new Interest
      </button>
    </>
  )
}
