export default function Form({ children, setCurrentStep, currentStep }) {
  function handleNextClick() {
    setCurrentStep((step) => (step + 1 < 7 ? step + 1 : step))
  }
  function handleBackClick() {
    setCurrentStep((step) => step - 1)
  }
  return (
    <form className="relative flex flex-col gap-5">
      {children}
      <section className="w-full flex gap-2">
        {currentStep > 1 && (
          <button
            className="btn btn-accent flex-1"
            type="button"
            onClick={handleBackClick}
          >
            Back
          </button>
        )}
        {currentStep !== 5 && (
          <button
            className="btn btn-secondary flex-1"
            type="button"
            onClick={handleNextClick}
          >
            Next
          </button>
        )}
      </section>
    </form>
  )
}
