export default function TimesClose({ handler }) {
  return (
    <div onClick={handler}>
      <i className="fa-solid fa-times text-danger absolute top-3 right-5 cursor-pointer"></i>
    </div>
  )
}
