export default function Pagination({ currentStep = 1, setCurrentStep }) {
  return (
    <div className="join mb-0 flex">
      <button
        onClick={() => setCurrentStep(1)}
        className={`join-item btn bg-neutral text-secondary rounded-bl-none border-primary transition-transform ${
          currentStep === 1 && 'bg-primary translate-y-8'
        }`}
      >
        1
      </button>
      <button
        onClick={() => setCurrentStep(2)}
        className={`join-item btn bg-neutral text-secondary rounded-bl-none border-primary ${
          currentStep === 2 && 'bg-primary translate-y-8'
        }`}
      >
        2
      </button>
      <button
        onClick={() => setCurrentStep(3)}
        className={`join-item btn bg-neutral text-secondary rounded-bl-none border-primary ${
          currentStep === 3 && 'bg-primary translate-y-8'
        }`}
      >
        3
      </button>
      <button
        onClick={() => setCurrentStep(4)}
        className={`join-item btn bg-neutral text-secondary rounded-bl-none border-primary ${
          currentStep === 4 && 'bg-primary translate-y-8'
        }`}
      >
        4
      </button>
      <button
        onClick={() => setCurrentStep(5)}
        className={`join-item btn bg-neutral text-secondary rounded-bl-none border-primary ${
          currentStep === 5 && 'bg-primary translate-y-8'
        }`}
      >
        5
      </button>
      <button
        onClick={() => setCurrentStep(6)}
        className={`join-item btn bg-neutral text-secondary rounded-none border-primary ${
          currentStep === 6 && 'bg-primary translate-y-8'
        }`}
      >
        <i className="fa-regular fa-eye"></i>
      </button>
    </div>
  )
}
