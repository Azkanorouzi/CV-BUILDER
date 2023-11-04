import { useLocation } from 'react-router-dom'

export default function PageNotFound() {
  const loc = useLocation()
  return (
    <div className="card w-full h-screen grid place-content-center">
      <h1 className="text-3xl">
        PAGE {loc.pathname && `${loc.pathname}`} NOT FOUND 404 :(
      </h1>
    </div>
  )
}
