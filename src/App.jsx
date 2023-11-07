import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import PageNotFound from './components/PageNotFound'
import { FormDataContextProvider } from './contexts/FormDataContext'
import { Suspense, lazy } from 'react'
import Loader from './components/Loader'
const CVBuilder = lazy(() => import('./pages/CVBuilder'))
const Resume = lazy(() => import('./pages/Resume'))

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
          <Suspense fallback={<Loader></Loader>}>
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
          </Suspense>
          <Footer />
        </div>
      </BrowserRouter>
    </FormDataContextProvider>
  )
}

export default App
