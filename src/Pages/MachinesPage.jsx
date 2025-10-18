import Machines from "../Components/Machines"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import favIcon from '../assets/machine.jpg'
import MachinesDescription from "../Components/MachinesDescription"
import { useEffect } from "react"

let MachinesPage = () => {

useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll on page load
  }, []);

    return (
        <>
        <link rel="icon" href={favIcon}></link>
        <title>Machines</title>
        <Navbar />
        <Machines />
        <MachinesDescription />
        <Footer />
        </>
    )
}

export default MachinesPage