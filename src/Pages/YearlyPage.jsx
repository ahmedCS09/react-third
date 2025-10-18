import Navbar from "../Components/Navbar"
import Yearly from "../Components/Yearly"
import Footer from "../Components/Footer"
import favIcon from '../assets/membership.jpg'
import { useEffect } from "react"

let YearlyPage = () => {

useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll on page load
  }, []);

    return (
        <>
        <link rel="icon" href={favIcon}></link>
        <title>Yearly Basis</title>
        <Navbar />
        <Yearly />
        <Footer />
        </>
    )
}

export default YearlyPage