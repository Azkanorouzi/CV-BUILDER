import ThemeChangeBtn from './ThemeChangeBtn'
export default function Header({ setCurPage }) {
  return (
    <header className="flex justify-between px-10 py-5 sticky">
      <ThemeChangeBtn />
      <h1 className="linear-wipe text-3xl menu-title py-4">
        <i className="fa-solid fa-user-tie mr-4"></i>
        <span>CV BUILDER</span>
      </h1>
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
    </header>
  )
}
