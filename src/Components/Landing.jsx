import gym6 from '../assets/gym6.jpg'
import gym7 from '../assets/gym7.png'
import { useEffect, useContext, useRef } from 'react'
import { Context } from '../Context/ContextProvider'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from "gsap/ScrollTrigger"

let Landing = () => {

  const { theme } = useContext(Context)
  const gsapRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const selectors = ['.heading', '.para'];
    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        el.setAttribute("theme-change", theme);
      });
    });
    document.querySelector('.landing').setAttribute('theme-change', theme)
  }, [theme]);

  useEffect(() => {
    gsap.fromTo(gsapRef.current,
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 0.8,
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
    <section className="landing text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto" bis_skin_checked={1}>
        <div
          className="flex flex-col text-center w-full mb-8"
          bis_skin_checked={1}
        >
          <h2 className="heading text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            Building a Healthier Community, One Rep at a Time.
          </h2>
          <h1 className="heading sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            KARVE FITNESS CENTRE
          </h1>
          <p className="para lg:w-2/3 mx-auto leading-relaxed text-base">
            Our mission is to empower individuals to take control of their health and wellness journey. We're dedicated to providing a welcoming, non-intimidating environment where everyone, from beginners to seasoned athletes, feels supported and motivated.
          </p>
        </div>
      </div>
      <div className='parent1 w-screen h-auto flex flex-wrap justify-center items-center gap-35'>
        <div className='card_1 w-[500px] h-auto flex justify-center'>
          <div ref={gsapRef} className='imageDiv bg-cover scale-60 mr-10 sm:mr-0 sm:scale-100 w-[25rem] h-[25rem] relative ' style={{ backgroundImage: `url(${gym6})`, backgroundSize: 'cover' }}>
            <div className='imageChild bg-cover w-[16rem] h-[16rem] absolute -right-40 top-16 border-5 border-white' style={{ backgroundImage: `url(${gym7})`, backgroundSize: 'cover' }}></div>
          </div>
        </div>
        <div className='card_2 p-2 w-[525px] h-auto'>
          <br />

          <div className="heading"><h2>KARVE TRANSFORMER PILATES</h2></div>
          <br />
          <div className="para">Inspired by the Big Apple, on the pulse of the Big Smoke – we redefine the modern-day Pilates inspired workout at our Transformer Pilates studio. We capture that New York resilience and drive, tailored to the London lifestyle.</div>
          <br />
          <div className="para"> Our 50-minute class is performed on our custom-made, resistance-based Transformer machines. Each class starts with a warm-up, followed by a full body high-intensity workout, and finishes with a stretch and a mindfulness session allowing for a full reset.</div>
          <br />
          <div className="para"> The mind is at the forefront of our classes. We believe that a strong mind is the key to a strong body. Transform your mind into a ‘yes I can’ attitude and the results will speak for themselves. Our instructors are always there to motivate and lead the way, but it’s up to you to push through.</div>
        </div>
      </div>
      <br />
    </section>

  )
}

export default Landing