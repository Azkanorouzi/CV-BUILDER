import { useEffect } from 'react'

export default function Form({
  children,
  setCurrentStep,
  currentStep,
  setCurPage,
}) {
  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (
        e.key < 1 ||
        e.key > 7 ||
        isNaN(+e.key) ||
        JSON.stringify(document.activeElement).includes('input')
      ) {
        if (e.key !== 'Enter') return
      }
      currentStep !== e.key && setCurrentStep(e.key == 'Enter' ? 8 : +e.key)
    })
  }, [])
  function handleFinalStep() {
    setCurPage((cur) => (currentStep === 7 ? 'resume' : cur))
  }
  function handleNextClick() {
    handleFinalStep()
    setCurrentStep((step) => (step + 1 < 8 ? step + 1 : step))
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
        {currentStep !== 8 && (
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
