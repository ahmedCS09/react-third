import Navbar from "../Components/Navbar"
import Footer from '../Components/Footer'
import favIcon from '../assets/favIcon.png'
import Admission from '../Components/Admission'
import { useEffect } from "react"

let AdmissionPage = () => {

useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll on page load
  }, []);

  return (
    <>
    <link rel="icon" href={favIcon}></link>
      <title>Book class</title>
      <Navbar />
      <Admission />
      <Footer />
    </>
  )
}

export default AdmissionPage