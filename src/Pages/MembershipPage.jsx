import Membership from "../Components/Membership"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import favIcon from '../assets/membership.jpg'
import { useEffect } from "react"

let MembershipPage = () => {

useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll on page load
  }, []);

    return (
        <>
        
        <link rel="icon" href={favIcon}></link>
        <title>Membership</title>
        <Navbar />
        <Membership />
        <Footer />
        </>
    )
}

export default MembershipPage