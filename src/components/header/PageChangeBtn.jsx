export default function PageChangeBtn({ setCurPage }) {
  return (
    <label className="swap swap-flip" role="button">
      <input
        type="checkbox"
        onClick={() =>
          setCurPage((cur) => (cur === 'resume' ? 'info' : 'resume'))
        }
      />
      <div className="swap-off flex items-center gap-2">
        <i className="fa-solid fa-pen text-3xl hover"></i>
        <span className="text-xl">Build</span>
      </div>
      <div className="swap-on flex items-center gap-2">
        <i className="fa-regular fa-eye text-3xl hover"></i>
        <span className="text-xl">Preview</span>
      </div>
    </label>
  )
}
