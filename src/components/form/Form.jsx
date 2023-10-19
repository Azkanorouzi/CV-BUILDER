export default function Form({ children, setCurrentStep }) {
  function handleNextClick() {
    setCurrentStep((step) => (step + 1 < 7 ? step + 1 : step))
  }
  return (
    <form className="relative flex flex-col gap-5">
      {children}
      <button
        className="btn btn-secondary"
        type="button"
        onClick={handleNextClick}
      >
        Next
      </button>
    </form>
  )
}
