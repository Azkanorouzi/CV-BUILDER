import ThemeChangeBtn from './ThemeChangeBtn'
import Logo from './Logo'
import PageChangeBtn from './PageChangeBtn'

export default function Header({ setCurPage }) {
  return (
    <header className="flex justify-between px-3 py-2 lg:px-10 lg:py-5 fixed top-0 w-full  bg-opacity-30 backdrop-blur-2xl z-50 ">
      <ThemeChangeBtn />
      <Logo />
      <PageChangeBtn setCurPage={setCurPage} />
    </header>
  )
}
