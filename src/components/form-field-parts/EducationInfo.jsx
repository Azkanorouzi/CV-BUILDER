import TextInput from '../form/TextInput'

export default function EducationInfo({ educationData, dispatch, index }) {
  function inputChangeHandler(propName) {
    return function (e) {
      const newObj = { ...educationData[index], [propName]: e.target.value }
      const newEducationData = [...educationData]
      newEducationData[index] = newObj
      dispatch({
        type: 'setItems',
        payLoad: {
          propName: 'educationData',
          newItems: newEducationData,
        },
      })
    }
  }
  function deleteClickHandler() {
    const newEducationData = [...educationData]
    newEducationData.splice(index, 1)
    dispatch({
      type: 'deleteItem',
      payLoad: { propName: 'educationData', newItems: newEducationData },
    })
  }
  return (
    <div className="bg-neutral p-3 flex flex-col gap-2 justify-center items-center rounded-2xl text-center relative">
      {index > 0 && (
        <div onClick={deleteClickHandler}>
          <i className="fa-solid fa-times text-danger absolute top-3 right-5 cursor-pointer"></i>
        </div>
      )}
      <fieldset className="flex gap-10">
        <TextInput
          placeholder={'The odin project'}
          value={educationData[index].institutionName}
          onChange={inputChangeHandler('institutionName')}
        >
          Institution name:{' '}
        </TextInput>
        <TextInput
          placeholder={'Full stack developer certification'}
          value={educationData[index].degreeTitle}
          onChange={inputChangeHandler('degreeTitle')}
        >
          Degree, Certification or title:{' '}
        </TextInput>
      </fieldset>
      <fieldset className="flex gap-10">
        <TextInput
          placeholder={'The odin project'}
          type="date"
          value={educationData[index].startingDate}
          onChange={inputChangeHandler('startingDate')}
        >
          Starting date:{' '}
        </TextInput>
        <TextInput
          placeholder={'Full stack developer certification'}
          type="date"
          value={educationData[index].endingDate}
          onChange={inputChangeHandler('endingDate')}
        >
          Ending date:{' '}
        </TextInput>
      </fieldset>
    </div>
  )
}
