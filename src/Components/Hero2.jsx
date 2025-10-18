import facility from '../assets/facility.jpeg'
import facility1 from '../assets/facility1.jpg'
import facility2 from '../assets/facility2.jpg'
import facility3 from '../assets/facility3.jpg'
import machine from '../assets/machine.jpg'
import machine1 from '../assets/machine1.jpeg'
import machine2 from '../assets/machine2.jpeg'
import machine3 from '../assets/machine3.jpeg'
import training from '../assets/training.jpeg'
import training1 from '../assets/training1.jpg'
import training2 from '../assets/training2.jpg'
import training3 from '../assets/training3.jpg'
import membership from '../assets/membership.jpg'
import membership1 from '../assets/membership1.jpg'
import membership2 from '../assets/membership2.jpg'
import { useState, useEffect, useContext, useRef } from 'react'
import { Context } from '../Context/ContextProvider'
import { Link } from 'react-router'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from "gsap/ScrollTrigger"

// CUSTOMIZE HOOK
let useImageSlider = (images, hover, interval = 1000) => {

    // STATES
    const [current, setCurrent] = useState(0)
    const [opacity, setOpacity] = useState(1)

    // FUNCTION / COMPONENT
    let imageSlider = () => {
        let slider
        if (hover) {

            slider = setInterval(() => {
                setOpacity(0)
                setTimeout(() => {
                    setCurrent((prev) => (prev + 1) % images.length)
                    setOpacity(1)
                }, 500)
            }, interval)
        }
        else {
            setCurrent(0)
        }
        return () => clearInterval(slider)
    }

    useEffect(() => { return imageSlider() }, [hover, images, interval])

    return { current, opacity }

}

let Hero2 = () => {

    const { theme } = useContext(Context)
    const gsapRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    // IMAGES ARRAY
    const facilities = [facility, facility1, facility2, facility3]
    const machines = [machine, machine1, machine2, machine3]
    const trainings = [training, training1, training2, training3]
    const memberships = [membership, membership1, membership2]

    //   HOVER STATES FOR IMAGES
    const [hover1, setHover1] = useState(false)
    const [hover2, setHover2] = useState(false)
    const [hover3, setHover3] = useState(false)
    const [hover4, setHover4] = useState(false)

    //   OBJECT DESTRUCTURING
    const { current: current1, opacity: opacity1 } = useImageSlider(facilities, hover1)
    const { current: current2, opacity: opacity2 } = useImageSlider(machines, hover2)
    const { current: current3, opacity: opacity3 } = useImageSlider(trainings, hover3)
    const { current: current4, opacity: opacity4 } = useImageSlider(memberships, hover4)

    useEffect(() => { document.querySelector('.parent').setAttribute('theme-change', theme) }, [theme])
    useEffect(() => {
        gsap.fromTo(gsapRef.current.children,
            {
                y: 100, 
                duration: 0.5
            }, // start slightly lower
            {
                y: 0,
                duration: 0.6,
                stagger: 0.2, // one by one
                ease: "power3.out",
                scrollTrigger: {
                    trigger: gsapRef.current,   // the div we want to animate
                    start: "top 80%",          // when div enters viewport (80% from top)
                    toggleActions: "play none none reverse",
                    // play when enter, reverse when scroll back
                }
            }
        )
    }, [])

    return (
        <>
            <div ref={gsapRef} className="parent flex flex-wrap justify-center w-screen gap-2 overflow-hidden" bis_skin_checked={1}>
                <br />
                <Link to="/facilities"
                    className="hover:cursor-pointer hover:scale-105 transition w-[375px] px-8 py-6"
                    bis_skin_checked={1} onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)}
                >
                    <h2 className="text-lg text-center sm:text-xl text-gray-900 font-medium title-font mb-2">
                        Facilities
                    </h2>
                    <img src={facilities[current1]} alt="" className='rounded w-full h-[32vh] transition duration-500 ease-in-out' style={{ opacity: opacity1 }} />
                </Link>
                <Link to="/machines"
                    className="hover:cursor-pointer hover:scale-105 transition w-[375px] px-8 py-6 border-gray-200 border-opacity-60"
                    bis_skin_checked={1} onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)}
                >
                    <h2 className="text-lg text-center sm:text-xl text-gray-900 font-medium title-font mb-2">
                        Machines
                    </h2>
                    <img src={machines[current2]} alt="" className='rounded w-full h-[32vh] transition duration-500 ease-in-out' style={{ opacity: opacity2 }} />
                </Link>
                <Link to="/training"
                    className="hover:cursor-pointer hover:scale-105 transition w-[375px] px-8 py-6 border-gray-200 border-opacity-60"
                    bis_skin_checked={1} onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)}
                >
                    <h2 className="text-lg text-center sm:text-xl text-gray-900 font-medium title-font mb-2">
                        Training
                    </h2>
                    <img src={trainings[current3]} alt="" className='rounded w-full h-[32vh] transition duration-500 ease-in-out' style={{ opacity: opacity3 }} />
                </Link>
                <Link to="/membership"
                    className="hover:cursor-pointer hover:scale-105 transition w-[375px] px-8 py-6 border-gray-200 border-opacity-60"
                    bis_skin_checked={1} onMouseEnter={() => setHover4(true)} onMouseLeave={() => setHover4(false)}
                >
                    <h2 className="text-lg text-center sm:text-xl text-gray-900 font-medium title-font mb-2">
                        Membership
                    </h2>
                    <img src={memberships[current4]} alt="" className='rounded w-full h-[32vh] transition duration-500 ease-in-out' style={{ opacity: opacity4 }} />
                </Link>
                <br />
            </div>

        </>
    )
}

export default Hero2