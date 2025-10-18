import Navbar from "../Components/Navbar"
import Hero2 from "../Components/Hero2"
import Testimonial from "../Components/Testimonial"
import Pricing from "../Components/Pricing"
import Footer from "../Components/Footer"
import favIcon from '../assets/favIcon.png'
import Hero1 from "../Components/Hero1"
import { useEffect } from "react"

let HomePage = () => {

    useEffect(() => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);
}, []);


    return ( 
        <>
        <link rel="icon" href={favIcon}></link>
        <title>KARVE</title>
        <Navbar />
        <Hero1 />
        <Testimonial />
        <Hero2 />
        <Pricing />
        <Footer />
        </>
    )
}

export default HomePage