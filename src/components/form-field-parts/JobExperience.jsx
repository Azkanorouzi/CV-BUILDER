import TextInput from './TextInput'
import AddBtn from './AddBtn'
import DescriptionInput from './DescriptionInput'
import { useFormData } from '../../contexts/FormDataContext'

export default function JobExperience({ index, handler }) {
  const { data, dispatch } = useFormData()
  const { jobExperienceData } = data

  function inputChangeHandler(propName) {
    return function (e) {
      const newObj = { ...jobExperienceData[index], [propName]: e.target.value }
      const newJobExperienceData = [...jobExperienceData]
      newJobExperienceData[index] = newObj
      dispatch({
        type: 'setItems',
        payLoad: {
          propName: 'jobExperienceData',
          newItems: newJobExperienceData,
        },
      })
    }
  }
  function deleteClickHandler() {
    const newEducationData = [...jobExperienceData]
    newEducationData.splice(index, 1)
    dispatch({
      type: 'deleteItem',
      payLoad: {
        propName: 'jobExperienceData',
        newItem: newEducationData,
      },
    })
  }
  return (
    <>
      <div className="bg-neutral p-3 flex flex-col gap-2 justify-center items-center rounded-2xl text-center relative">
        {index > 0 && (
          <div onClick={deleteClickHandler}>
            <i className="fa-solid fa-times text-danger absolute top-3 right-5 cursor-pointer"></i>
          </div>
        )}
        <fieldset className="flex gap-10">
          <TextInput
            placeholder={'Front end developer'}
            value={jobExperienceData[index].position}
            onChange={inputChangeHandler('position')}
          >
            Your Position:{' '}
          </TextInput>
          <TextInput
            placeholder={'Google'}
            value={jobExperienceData[index].company}
            onChange={inputChangeHandler('company')}
          >
            Company:{' '}
          </TextInput>
        </fieldset>
        <fieldset className="flex gap-10">
          <TextInput
            placeholder={'The odin project'}
            type="date"
            value={jobExperienceData[index].startingDate}
            onChange={inputChangeHandler('startingDate')}
          >
            Starting date:{' '}
          </TextInput>
          <TextInput
            placeholder={'Full stack developer certification'}
            type="date"
            value={jobExperienceData[index].endingDate}
            onChange={inputChangeHandler('endingDate')}
          >
            Ending date:{' '}
          </TextInput>
        </fieldset>
        <fieldset>
          <TextInput
            placeholder={'USA'}
            value={jobExperienceData[index].location}
            onChange={inputChangeHandler('location')}
          >
            Location:{' '}
          </TextInput>
        </fieldset>
        <DescriptionInput
          inputChangeHandler={inputChangeHandler}
          index={index}
          data={jobExperienceData}
        />
      </div>
      {index === jobExperienceData.length - 1 && (
        <AddBtn onClick={handler}>Job experience</AddBtn>
      )}
    </>
  )
}
