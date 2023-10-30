export default function StepTitle({ currentStep }) {
  return (
    <div className="text-3xl bg-neutral w-full h-full rounded-tr-2xl border  border-l-0 text-primary flex items-center justify-center border-primary">
      <span className="text-secondary px-2">
        {currentStep === 1 && 'General Info'}
        {currentStep === 2 && 'Contact'}
        {currentStep === 3 && 'Education'}
        {currentStep === 4 && 'Job experience'}
        {currentStep === 5 && 'Skills'}
        {currentStep === 6 && 'Languages'}
        {currentStep === 7 && 'Interests'}
      </span>
    </div>
  )
}
