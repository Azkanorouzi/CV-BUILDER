import { useEffect } from 'react'

export default function Form({ children, dispatch, currentStep, setCurPage }) {
  useEffect(() => {
    function handleKeyDown(e) {
      if (
        e.key < 1 ||
        e.key > 7 ||
        isNaN(+e.key) ||
        document.activeElement.tagName === 'INPUT' ||
        document.activeElement.tagName === 'TEXTAREA'
      ) {
        if (e.key === 'Enter' && currentStep < 7) {
          dispatch({ type: 'setStep', payLoad: currentStep + 1 })
          return
        }
        if (e.key === 'Enter' && currentStep === 7) {
          setCurPage('resume')
          dispatch({ type: 'setStepFinal' })
          return
        }
        return
      }
      currentStep !== e.key && dispatch({ type: 'setStep', payLoad: +e.key })
    }
    document.addEventListener('keydown', handleKeyDown)
    return function () {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentStep, dispatch, setCurPage])

  function handleNextClick() {
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
