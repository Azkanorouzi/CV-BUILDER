export default function Form({ children }) {
  return (
    <form className="relative flex flex-col gap-5">
      {children}
      <button className="btn btn-secondary" type="button">
        Next
      </button>
    </form>
  )
}
