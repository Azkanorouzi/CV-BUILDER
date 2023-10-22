import { useRef, useEffect, useState } from 'react'

export default function FormError({ children, setErr }) {
  const [isVisible, setIsVisible] = useState(true)
  useEffect(function () {
    const timer = setTimeout(function () {
      setIsVisible(false)
      setErr(false)
    }, 2500)
    return () => {
      clearTimeout(timer)
    }
  }, [])
  return isVisible ? (
    <div className="fixed top-20 z-10 w-full flex justify-center items-center animate-opacity ">
      <div className="alert alert-error w-3/6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span className="linear-wipe">{children}</span>
      </div>
    </div>
  ) : (
    ''
  )
}
