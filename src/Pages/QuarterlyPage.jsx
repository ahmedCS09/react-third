import Navbar from "../Components/Navbar"
import Quarterly from "../Components/Quarterly"
import Footer from "../Components/Footer"
import favIcon from '../assets/membership.jpg'
import { useEffect } from "react"

let QuarterlyPage = () => {

useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll on page load
  }, []);

    return (
        <>
        <link rel="icon" href={favIcon}></link>
        <title>Quarterly Basis</title>
        <Navbar />
        <Quarterly />
        <Footer />
        </>
    )
}

export default QuarterlyPage