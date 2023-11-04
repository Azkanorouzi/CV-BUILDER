import TextInput from './TextInput'
import AddBtn from './AddBtn'
import TimesClose from './TimesClose'
import { useFormData } from '../../contexts/FormDataContext'

export default function Skill() {
  const { dispatch, data } = useFormData()
  const { skills } = data
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
          {i > 0 && <TimesClose handler={() => deleteClickHandler(i)} />}
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
      <AddBtn onClick={(e) => addHandler(e, 4)}>Skills</AddBtn>
    </>
  )
}
