import { useEffect, useState } from 'react'
import Main from './components/main'
import Header from './components/header'
import Footer from './components/footer'

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
  const [currentPage, setCurPage] = useState('info')
  const [currentTab, setCurTab] = useState('1')

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <Main currentPage={currentPage} />
      <Footer />
    </div>
  )
}

export default App
