import Shop from "../Components/Shop"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import favIcon from '../assets/favIcon.png'
import { useEffect } from "react"

let ShopPage = () => {

useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll on page load
  }, []);

    return (
        <>
        <link rel="icon" href={favIcon}></link>
        <title>Shop</title>
        <Navbar />
        <Shop />
        <Footer />
        </>
    )
}

export default ShopPage