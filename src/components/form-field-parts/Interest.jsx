import TextInput from './TextInput'

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
      {i > 0 && (
        <div onClick={() => deleteClickHandler(i)}>
          <i className="fa-solid fa-times text-danger absolute top-3 right-5 cursor-pointer"></i>
        </div>
      )}
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
