import JoinUs from "../Components/JoinUs"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import favIcon from '../assets/favIcon.png'
import { useEffect } from "react"

let JoinUsPage = () => {

useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll on page load
  }, []);

    return (
        <>
        <link rel="icon" href={favIcon}></link>
        <title>Why join us</title>
        <Navbar />
        <JoinUs />
        <Footer />
        </>
    )
}

export default JoinUsPage