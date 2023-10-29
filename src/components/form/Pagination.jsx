export default function Pagination({ currentStep = 1, dispatch, setCurPage }) {
  return (
    <div className="join mb-0 flex">
      <button
        onClick={() => dispatch({ type: 'setStep', payLoad: 1 })}
        className={`join-item btn bg-neutral text-secondary rounded-bl-none border-primary transition-transform ${
          currentStep === 1 && 'bg-primary translate-y-8'
        }`}
      >
        1
      </button>
      <button
        onClick={() => dispatch({ type: 'setStep', payLoad: 2 })}
        className={`join-item btn bg-neutral text-secondary rounded-bl-none border-primary ${
          currentStep === 2 && 'bg-primary translate-y-8'
        }`}
      >
        2
      </button>
      <button
        onClick={() => dispatch({ type: 'setStep', payLoad: 3 })}
        className={`join-item btn bg-neutral text-secondary rounded-bl-none border-primary ${
          currentStep === 3 && 'bg-primary translate-y-8'
        }`}
      >
        3
      </button>
      <button
        onClick={() => dispatch({ type: 'setStep', payLoad: 4 })}
        className={`join-item btn bg-neutral text-secondary rounded-bl-none border-primary ${
          currentStep === 4 && 'bg-primary translate-y-8'
        }`}
      >
        4
      </button>
      <button
        onClick={() => dispatch({ type: 'setStep', payLoad: 5 })}
        className={`join-item btn bg-neutral text-secondary rounded-bl-none border-primary ${
          currentStep === 5 && 'bg-primary translate-y-8'
        }`}
      >
        5
      </button>
      <button
        onClick={() => dispatch({ type: 'setStep', payLoad: 6 })}
        className={`join-item btn bg-neutral text-secondary rounded-bl-none border-primary ${
          currentStep === 6 && 'bg-primary translate-y-8'
        }`}
      >
        6
      </button>
      <button
        onClick={() => dispatch({ type: 'setStep', payLoad: 7 })}
        className={`join-item btn bg-neutral text-secondary rounded-bl-none border-primary ${
          currentStep === 7 && 'bg-primary translate-y-8'
        }`}
      >
        7
      </button>
      <button
        onClick={() => setCurPage('resume')}
        className={`join-item btn bg-neutral text-secondary rounded-none border-primary`}
      >
        <i className="fa-regular fa-eye"></i>
      </button>
    </div>
  )
}
