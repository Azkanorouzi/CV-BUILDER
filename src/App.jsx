import { useEffect, useState } from 'react'
import { themeChange } from 'theme-change'
import Main from './components/main'
import Header from './components/header'
import Footer from './components/footer'
import Info from './pages/info'
import Resume from './pages/resume'

/* 
    <button data-set-theme="night" data-act-class="ACTIVECLASS">
        b
      </button>
      <button data-set-theme="dark" data-act-class="ACTIVECLASS">
        a
      </button>
      <button data-set-theme="light" data-act-class="ACTIVECLASS">
        s
      </button>
*/
function App() {
  // useEffect(() => {
  //   themeChange(false)
  //   // 👆 false parameter is required for react project
  // }, [])
  const [currentPage, setCurPage] = useState('info')
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <Main>
        {currentPage === 'info' && <Info />}
        {currentPage === 'resume' && <Resume />}
      </Main>
      <Footer />
    </div>
  )
}

export default App
