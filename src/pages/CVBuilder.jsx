import { useEffect } from 'react'
import Pagination from '../components/Pagination'

export default function CVBuilder({
  children,
  currentStep,
  setCurrentStep,
  setCurPage,
  data,
  setLocalStorageStateValue,
}) {
  // useEffect(() => {
  //   return () => {
  //     setLocalStorageStateValue(data)
  //   }
  // }, [])
  // useEffect(() => {
  //   setLocalStorageStateValue(data)
  // }, [data])
  return (
    <section className="grid place-content-center w-full h-full animate-opacity-in opacity-0">
      <div className="flex items-center rounded-xl">
        <Pagination
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          setCurPage={setCurPage}
        ></Pagination>
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
      </div>
      <article
        className="card bg-neutral-focus p-8 text-accent rounded-tl-none  rounded-tr-none  border   border-t-0 border-primary shadow overflow-scroll max-h-96"
        style={{ maxHeight: '33rem' }}
      >
        {children}
      </article>
    </section>
  )
}
