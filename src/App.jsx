import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Main from './components/main'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import CVBuilder from './pages/CVBuilder'
import Resume from './pages/resume'
import PageNotFound from './components/PageNotFound'
import { FormDataContextProvider } from './contexts/FormDataContext'

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
  return (
    <FormDataContextProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen relative">
          <Header />
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Navigate to="/cvbuilder" />} />
            <Route
              path="/cvbuilder"
              element={
                <Main>
                  <CVBuilder />
                </Main>
              }
            >
              <Route
                path="/cvbuilder/:step"
                element={
                  <Main>
                    <CVBuilder />
                  </Main>
                }
              />
            </Route>
            <Route
              path="/resume"
              element={
                <Main>
                  <Resume />
                </Main>
              }
            ></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </FormDataContextProvider>
  )
}

export default App
