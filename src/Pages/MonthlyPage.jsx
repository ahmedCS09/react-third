import Navbar from "../Components/Navbar"
import Monthly from "../Components/Monthly"
import Footer from "../Components/Footer"
import favIcon from '../assets/membership.jpg'
import { useEffect } from "react"

let MonthlyPage = () => {

useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll on page load
  }, []);

    return (
        <>
        <link rel="icon" href={favIcon}></link>
        <title>Monthy Basis</title>
        <Navbar />
        <Monthly />
        <Footer />
        </>
    )
}

export default MonthlyPage