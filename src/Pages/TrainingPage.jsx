import Training from "../Components/Training"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import favIcon from '../assets/training.jpeg'
import TrainingDescription from "../Components/TrainingDescription"
import { useEffect } from "react"

let TrainingPage = () => {

useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll on page load
  }, []);

    return (
        <>
        <link rel="icon" href={favIcon}></link>
        <title>Training</title>
        <Navbar />
        <Training />
        <TrainingDescription />
        <Footer />
        </>
    )
}

export default TrainingPage