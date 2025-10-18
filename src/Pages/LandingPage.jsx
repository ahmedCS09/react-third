import Navbar from "../Components/Navbar"
import Landing from "../Components/Landing"
import Footer from "../Components/Footer"
import Hero1 from "../Components/Hero1"
import favIcon from '../assets/favIcon.png'
import { useEffect } from "react"

let LandingPage = () => {

useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll on page load
  }, []);

    return (
        <>
        <link rel="icon" href={favIcon}></link>
        <title>KARVE</title>
            <Navbar />
            <Hero1 />
            <Landing />
            <Footer />
        </>
    )
}

export default LandingPage