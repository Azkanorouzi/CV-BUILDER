import { useFormData } from '../contexts/FormDataContext'
import FormError from './form/FormError'

export default function Main({ children }) {
  const { dispatch, state } = useFormData()
  return (
    <main className="pb-20 pt-40">
      {state.err && <FormError dispatch={dispatch}>{state.err}</FormError>}
      {children}
    </main>
  )
}
