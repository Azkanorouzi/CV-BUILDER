import TextInput from './TextInput'
import TimesClose from './TimesClose'

export default function Interest({
  deleteClickHandler,
  interest,
  i,
  inputChangeHandler,
}) {
  return (
    <div
      className="bg-neutral p-3 flex flex-col gap-2 justify-center items-center rounded-2xl text-center relative"
      key={i}
    >
      {i > 0 && <TimesClose handler={() => deleteClickHandler(i)} />}
      <fieldset className="flex gap-10">
        <TextInput
          placeholder={'video games'}
          value={interest}
          onChange={(e) => inputChangeHandler(e, i)}
        >
          Interest:{' '}
        </TextInput>
      </fieldset>
    </div>
  )
}
