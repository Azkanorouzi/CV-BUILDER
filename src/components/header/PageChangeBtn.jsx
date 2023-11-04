import { useEffect, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function PageChangeBtn() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const buildBtn = useRef(null)
  const previewBtn = useRef(null)

  useEffect(() => {
    const pathName = pathname.slice(1).toLowerCase()
    if (pathName === 'cvbuilder') {
      buildBtn.current.classList.add('swap-off')
      previewBtn.current.classList.add('swap-on')
      return
    }
    if (pathName === 'resume') {
      buildBtn.current.classList.add('swap-on')
      previewBtn.current.classList.add('swap-off')
      return
    }
    buildBtn.current.classList.add('swap-off')
    previewBtn.current.classList.add('swap-on')
  }, [])
  return (
    <label className="swap swap-flip" role="button">
      <input
        type="checkbox"
        onClick={() =>
          navigate(pathname.includes('/cvbuilder') ? 'resume' : 'cvbuilder')
        }
      />

      <div className="flex items-center gap-2" ref={buildBtn}>
        <i className="fa-solid fa-pen text-3xl hover"></i>
        <span className="text-xl">Build</span>
      </div>
      <div className="flex items-center gap-2" ref={previewBtn}>
        <i className="fa-regular fa-eye text-3xl hover"></i>
        <span className="text-xl">Preview</span>
      </div>
    </label>
  )
}
