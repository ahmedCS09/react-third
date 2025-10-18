import { useContext } from 'react'
import './App.css'
import RegisterPage from './Pages/RegisterPage'
import LoginPage from './Pages/LoginPage'
import LandingPage from './Pages/LandingPage'
import AdmissionPage from './Pages/AdmissionPage'
import HomePage from './Pages/HomePage'
import JoinUsPage from './Pages/JoinUsPage'
import ShopPage from './Pages/ShopPage'
import ErrorPage from './Pages/ErrorPage'
import { Context } from './Context/ContextProvider'
import { Routes, Route } from 'react-router'
import FacilitiesPage from './Pages/FacilitiesPage'
import MachinesPage from './Pages/MachinesPage'
import TrainingPage from './Pages/TrainingPage'
import MembershipPage from './Pages/MembershipPage'
import MonthlyPage from './Pages/MonthlyPage'
import QuarterlyPage from './Pages/QuarterlyPage'
import YearlyPage from './Pages/YearlyPage'

function App() {
  const { user } = useContext(Context)

  return (
    <>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="joinUs" element={<JoinUsPage />} />
        {(user) ?
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="admission" element={<AdmissionPage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="facilities" element={<FacilitiesPage />} />
            <Route path="machines" element={<MachinesPage />} />
            <Route path="training" element={<TrainingPage />} />
            <Route path="membership" element={<MembershipPage />} />
            <Route path="monthly" element={<MonthlyPage />} />
            <Route path="quarterly" element={<QuarterlyPage />} />
            <Route path="yearly" element={<YearlyPage />} />
          </>
          :
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </>
        }
      </Routes>
    </>
  )
}

export default App