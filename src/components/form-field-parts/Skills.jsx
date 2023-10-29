import TextInput from '../form/TextInput'

export default function Skill({ skills, dispatch }) {
  function inputChangeHandler(e, index) {
    const newSkills = [...skills]
    newSkills[index] = e.target.value
    dispatch({ type: 'setSkills', payLoad: newSkills })
  }
  function deleteClickHandler(index) {
    const newSkills = [...skills]
    newSkills.splice(index, 1)
    dispatch({ type: 'setSkills', payLoad: newSkills })
  }
  function addHandler(e, max) {
    if (skills.length > max) {
      dispatch({
        type: 'err',
        payLoad: `Error: you can't have more than ${max} items`,
      })
      return
    }
    dispatch({ type: 'setSkills', payLoad: [...skills, e.target.value] })
  }
  return (
    <>
      {skills.map((skill, i) => (
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
              placeholder={'Good communication skill'}
              value={skill}
              onChange={(e) => inputChangeHandler(e, i)}
            >
              Skill:{' '}
            </TextInput>
          </fieldset>
        </div>
      ))}

      <div className="divider"></div>
      <button
        className="btn btn-primary text-black"
        type="button"
        onClick={(e) => addHandler(e, 12)}
      >
        Add new Skill
      </button>
    </>
  )
}
