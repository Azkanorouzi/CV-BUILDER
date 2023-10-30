export default function DescriptionInput({
  inputChangeHandler,
  data,
  index,
  contactData,
}) {
  return (
    <label htmlFor="desc">
      Description:
      <textarea
        placeholder="something"
        className="w-full resize-none h-24 border border-secondary rounded-xl p-1 text-primary"
        id="desc"
        value={contactData ?? data[index].description}
        onChange={inputChangeHandler('description')}
      ></textarea>
    </label>
  )
}
