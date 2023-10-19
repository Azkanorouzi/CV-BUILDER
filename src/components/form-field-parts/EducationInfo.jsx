import TextInput from '../form/TextInput'

export default function EducationInfo({
  educationInfo,
  educationinfoSetter,
  index,
}) {
  return (
    <div className="bg-neutral p-3 flex flex-col gap-2 justify-center items-center rounded-2xl text-center">
      <fieldset className="flex gap-10">
        <TextInput placeholder={'The odin project'}>
          Institution name:{' '}
        </TextInput>
        <TextInput placeholder={'Full stack developer certification'}>
          Degree, Certification or title:{' '}
        </TextInput>
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
    </div>
  )
}
