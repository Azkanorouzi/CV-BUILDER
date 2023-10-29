import { useEffect } from 'react'

export default function Form({ children, dispatch, currentStep, setCurPage }) {
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
      currentStep !== e.key &&
        dispatch({ type: 'setStep', payLoad: e.key == 'Enter' ? 8 : +e.key })
    })
  }, [currentStep, dispatch])

  function handleNextClick() {
    console.log(currentStep)
    if (currentStep === 7) {
      dispatch({ type: 'setStepFinal' })
      setCurPage('resume')
      return
    }
    dispatch({ type: 'setStep', payLoad: currentStep + 1 })
  }
  return (
    <form className="relative flex flex-col gap-5">
      {children}
      <section className="w-full flex gap-2">
        {currentStep > 1 && (
          <button
            className="btn btn-accent flex-1"
            type="button"
            onClick={() =>
              dispatch({ type: 'setStep', payLoad: currentStep - 1 })
            }
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
