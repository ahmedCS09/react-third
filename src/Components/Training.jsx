import training3 from '../assets/training3.jpg'
import training4 from '../assets/training4.jpg'
import training5 from '../assets/training5.jpg'
import training6 from '../assets/training6.jpg'
import { useRef, useEffect, useContext } from 'react'
import { gsap } from 'gsap/gsap-core'
import { Context } from '../Context/ContextProvider'

let Training = () => {

    const imgRef = useRef(null)
    const {theme} = useContext(Context)
    
    useEffect(() => {
        gsap.fromTo(imgRef.current.children, 
        { opacity: 1, y: 80 }, // start slightly lower
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.2, // one by one
          ease: "power3.out"
        }
    )
    }, [])

    useEffect(() => {
      document.querySelector('.parentMost').setAttribute('theme-change', theme)
      const selectors = ['text']
      selectors.forEach((selector) => {
        document.querySelectorAll(selector).forEach((el) => el.setAttribute('theme-change', theme))
      })
    }, [theme])

    return (
        <>
        <div className="parentMost">
  <div className="px-4 py-16 sm:px-6 sm:py-20 w-screen flex flex-col items-center">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
      Machines KARVE provides you
    </h2>
    <div ref={imgRef} className="mt-6 flex justify-center flex-wrap gap-x-6 gap-y-10 w-[95%]">
      <a href='#t1' className="group relative w-80">
        <img
          src={training3}
          alt="Front of men's Basic Tee in black."
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80 border"
        />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <h3>
                <span aria-hidden="true" className="absolute inset-0" />
                Strength & Conditioning
              </h3>
            </h3>
          </div>
        </div>
      </a>
      <a href='#t2' className="group relative w-80">
        <img
          src={training4}
          alt="Front of men's Basic Tee in white."
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80 border"
        />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <h3>
                <span aria-hidden="true" className="absolute inset-0" />
                cardio & Endurance
              </h3>
            </h3>
          </div>
        </div>
      </a>
      <a href='#t3' className="group relative w-80">
        <img
          src={training5}
          alt="Front of men's Basic Tee in dark gray."
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80 border"
        />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <h3>
                <span aria-hidden="true" className="absolute inset-0" />
                Flexibility & Mobility
              </h3>
            </h3>
          </div>
        </div>
      </a>
      <a href='#t4' className="group relative w-80">
        <img
          src={training6}
          alt="Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube."
          className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80 border"
        />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <h3>
                <span aria-hidden="true" className="absolute inset-0" />
                Nutrition & Wellness
              </h3>
            </h3>
          </div>
        </div>
      </a>
    </div>
  </div>
</div>

        </>
    )
}

export default Training