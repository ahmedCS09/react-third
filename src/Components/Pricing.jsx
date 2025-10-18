import { useEffect, useContext, useRef } from "react"
import { Context } from "../Context/ContextProvider"
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger"

let Pricing = () => {

  const { theme } = useContext(Context)
  const gsapRef1 = useRef(null)
  const gsapRef2 = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => { document.querySelector('.parentMost1').setAttribute('theme-change', theme) }, [theme])
  useEffect(() => {
    gsap.fromTo(gsapRef1.current,
      {
        x: -150,
        duration: 0.6
      },
      {
        x: 0,
        duration: 0.6,
        scrollTrigger: {
                    trigger: gsapRef1.current,   // the div we want to animate
                    start: "top 80%",          // when div enters viewport (80% from top)
                    toggleActions: "play none none reverse",
                    // play when enter, reverse when scroll back
                }
      }
    )
    gsap.fromTo(gsapRef2.current,
      {
        x: 150,
        duration: 0.6
      },
      {
        x: 0,
        duration: 0.6,
         scrollTrigger: {
                    trigger: gsapRef2.current,   // the div we want to animate
                    start: "top 80%",          // when div enters viewport (80% from top)
                    toggleActions: "play none none reverse",
                    // play when enter, reverse when scroll back
                }
      }
    )
  }, [])

  return (
    <>
      <div className="parentMost1 relative isolate px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto aspect-1155/678 w-288.75 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
          />
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-yellow-600">Pricing</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-yellow-500 sm:text-6xl">
            Book Your Gym Class
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-yellow-600 sm:text-xl/8">
          Choose an affordable plan that fits your fitness goals.
          Each package includes professional trainer guidance, access to gym
          facilities, and personalized workout support.
        </p>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">

          {/* Basic Plan */}
          <div ref={gsapRef1} className="rounded-3xl bg-[rgba(91,116,71,1)] p-8 ring-1 ring-white/10 sm:p-10">
            <h3 className="text-base/7 font-semibold text-white">Basic Class</h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-white">
                Rs. 900
              </span>
              <span className="text-base text-gray-300">/month</span>
            </p>
            <p className="mt-6 text-base/7 text-gray-300">
              Perfect for beginners who want to start their fitness journey.
            </p>
            <ul className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
              <li>✔ Access to gym floor & equipment</li>
              <li>✔ 3 group classes per week</li>
              <li>✔ Guidance from certified trainer</li>
              <li>✔ Locker & shower facility</li>
            </ul>
            <a
              href="#"
              className="mt-8 block rounded-md bg-white/10 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-white/20 sm:mt-10"
            >
              Book Now
            </a>
          </div>

          {/* Premium Plan */}
          <div ref={gsapRef2} className="relative rounded-3xl bg-[rgb(52,79,31)] p-8 ring-1 ring-white/10 sm:p-10">
            <h3 className="text-base/7 font-semibold text-white">
              Premium Class
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-5xl font-semibold tracking-tight text-white">
                Rs. 2500
              </span>
              <span className="text-base text-gray-300">/month</span>
            </p>
            <p className="mt-6 text-base/7 text-gray-300">
              For fitness enthusiasts who want full access & extra benefits.
            </p>
            <ul className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
              <li>✔ Unlimited gym access</li>
              <li>✔ 6 group classes per week</li>
              <li>✔ Personal trainer consultation</li>
              <li>✔ Nutrition & diet guidance</li>
              <li>✔ Sauna & recovery zone access</li>
            </ul>
            <a
              href="#"
              className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-400 sm:mt-10"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing