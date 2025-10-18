import gym1 from '../assets/gym1.jpg'
import gym2 from '../assets/gym2.jpg'
import gym3 from '../assets/gym3.jpg'
import gym4 from '../assets/gym4.jpg'
import { Link } from 'react-router'
import { useContext } from 'react'
import { Context } from '../Context/ContextProvider'
import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'

let Hero1 = () => {

    const {theme} = useContext(Context) 
    const {user} = useContext(Context)
    const [text, setText] = useState('B')
    const timeoutRef = useRef(null)
    const charIndex = useRef(1)
    const textRef = useRef(null)
    let mainText = 'BUILD YOURSELF AT KARVE ..'

    let update = () => {
        let updateText = () => {

            if (charIndex.current > mainText.length) {
                charIndex.current = 1
                timeoutRef.current = setTimeout(updateText, 700)
                return
            }

            setText(mainText.slice(0, charIndex.current))
            charIndex.current++
            timeoutRef.current = setTimeout(updateText, 150)
        }
        updateText()
        return () => clearTimeout(timeoutRef.current)
    }

    useEffect(() => { update() }, [])
    useEffect(() => {
        gsap.fromTo(textRef.current, {
            duration: 0.5,
            x: -100
        },
            {
                duration: 0.5,
                x: 0
            }
        )
    }, [])
    useEffect(() => {
        document.querySelector('.parentMost').setAttribute('theme-change', theme)
    }, [theme])

    return (
        <>
        <div className="parentMost">
            <br />
            <h1 ref={textRef} className='text-center'>{text}</h1>
            <br />
            <div
                id="carouselExampleAutoplaying"
                className="carousel slide h-[75vh] carousel-fade z-0"
                data-bs-ride="carousel"
                data-bs-interval="2000"
                data-bs-pause="false"
            >
                <div className="carousel-inner h-full relative">
                    <div className="carousel-item active h-full" style={{ backgroundImage: `url(${gym1})` }}>
                        <img src={gym1} className="d-block w-100 h-full" alt="..." />
                    </div>
                    <div className="carousel-item h-full">
                        <img src={gym2} className="d-block w-100 h-full" alt="..." />
                    </div>
                    <div className="carousel-item h-full">
                        <img src={gym3} className="d-block w-100 h-full" alt="..." />
                    </div>
                    <div className="carousel-item h-full">
                        <img src={gym4} className="d-block w-100 h-full" alt="..." />
                    </div>
                    <div className='absolute inset-0 flex items-end justify-center w-screen z-10 mb-4'>
                        {(user) ?
                            <Link to='/admission'>
                                <button className="text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                                    BOOK CLASS
                                </button>
                            </Link>
                            :
                            <Link onClick={() => alert('Sign in first')}>
                                <button className=" mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                                    BOOK CLASS
                                </button>
                            </Link>
                        }
                    </div>
                </div>

            </div>
            <br />
        <br />
            </div>

        </>
    )
}

export default Hero1