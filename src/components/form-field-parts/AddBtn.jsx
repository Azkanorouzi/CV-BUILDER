{
  /* <button
className="btn btn-primary text-black"
type="button"
onClick={() =>
  addNewItemHandler(
    data.educationData,
    'educationData',
    GenerateEducation,
    3
  )
}
>
Add new degree
</button> */
}
{
  /*  */
}
export default function AddBtn({ children, onClick }) {
  return (
    <>
      <div className="divider"></div>
      <button
        className="btn btn-primary text-black"
        type="button"
        onClick={onClick}
      >
        Add new {children}
      </button>
    </>
  )
}
