import { useContext } from 'react'
import './App.css'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import LandingPage from './Pages/LandingPage'
import { authContext } from './Context/AuthContextProvider'
import { Routes, Route } from 'react-router'

function App() {
  const { user } = useContext(authContext)

  return (
    <>{user ?
      <Routes>
        <Route path="*" element={<LandingPage />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>

      :

      <Routes>
        <Route path="/" element={
          <>
            <LandingPage />
          </>
        }
        />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
      </Routes>
    }
    </>
  )
}

export default App