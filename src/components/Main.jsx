import { memo } from 'react'
import { useFormData } from '../contexts/FormDataContext'
import FormError from './form/FormError'

const Main = memo(function ({ children }) {
  const { dispatch, state } = useFormData()
  return (
    <main className="pb-20 pt-24 lg:pt-40 ">
      {state.err && <FormError dispatch={dispatch}>{state.err}</FormError>}
      {children}
    </main>
  )
})
Main.displayName = 'Main'
export default Main
