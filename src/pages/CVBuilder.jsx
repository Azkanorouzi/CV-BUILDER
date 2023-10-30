import Pagination from '../components/form/Pagination'
import StepTitle from '../components/form-field-parts/StepTitle'
import CVBuilderBody from '../components/form-field-parts/CVBuilderBody'

export default function CVBuilder({
  children,
  currentStep,
  dispatch,
  setCurPage,
}) {
  return (
    <section className="grid place-content-center w-full h-full animate-opacity-in opacity-0">
      <div className="flex items-center rounded-xl">
        <Pagination
          currentStep={currentStep}
          dispatch={dispatch}
          setCurPage={setCurPage}
        ></Pagination>
        <StepTitle currentStep={currentStep} />
      </div>
      <CVBuilderBody>{children}</CVBuilderBody>
    </section>
  )
}
