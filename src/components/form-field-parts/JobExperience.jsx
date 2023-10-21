import { useEffect } from 'react'
import TextInput from '../form/TextInput'

export default function JobExperience({
  jobExperienceData,
  setJobExperienceData,
  index,
}) {
  useEffect(function () {
    console.log(index)
  }, [])
  return (
    <>
      <div className="bg-neutral p-3 flex flex-col gap-2 justify-center items-center rounded-2xl text-center">
        <fieldset className="flex gap-10">
          <TextInput placeholder={'Front end developer'}>
            Your Position:{' '}
          </TextInput>
          <TextInput placeholder={'Google'}>Company: </TextInput>
        </fieldset>
        <fieldset className="flex gap-10">
          <TextInput placeholder={'The odin project'} type="date">
            Starting date:{' '}
          </TextInput>
          <TextInput
            placeholder={'Full stack developer certification'}
            type="date"
          >
            Ending date:{' '}
          </TextInput>
        </fieldset>
        <fieldset>
          <TextInput placeholder={'USA'}>Location: </TextInput>
        </fieldset>
        <label htmlFor="desc">
          Description:
          <textArea
            placeholder="something"
            className="w-full resize-none h-24 border border-secondary rounded-xl p-1 text-primary"
            id="desc"
          ></textArea>
        </label>
      </div>

      <div className="divider"></div>
    </>
  )
}
