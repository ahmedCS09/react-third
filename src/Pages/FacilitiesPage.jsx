import Facilities from "../Components/Facilities"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import favIcon from '../assets/facility.jpeg'
import FacilitiesDescription from "../Components/FacilitiesDescription"
import { useEffect } from "react"

let FacilitiesPage = () => {

useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll on page load
  }, []);

    return (
        <>
        <link rel="icon" href={favIcon}></link>
        <title>Facilities</title>
        <Navbar />
        <Facilities />
        <FacilitiesDescription />
        <Footer />
        </>
    )
}

export default FacilitiesPage