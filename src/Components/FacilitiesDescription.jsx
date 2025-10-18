import { useEffect, useContext, useRef } from "react"
import { Context } from "../Context/ContextProvider"
import { gsap } from "gsap/gsap-core"

let FacilitiesDescription = () => {

    const {theme} = useContext(Context)
    const gsapRef1 = useRef(null)
    const gsapRef2 = useRef(null)
    const gsapRef3 = useRef(null)
    const gsapRef4 = useRef(null)
    const gsapRef5 = useRef(null)
    const gsapRef6 = useRef(null)

useEffect(() => { document.querySelector('.parentMost1').setAttribute('theme-change', theme) }, [theme])
useEffect(() => {
    gsap.fromTo(gsapRef1.current,
      {
        y: 150
      },
      {
        y: 0,
        duration: 0.6,
        scrollTrigger: {
                    trigger: gsapRef1.current,   // the div we want to animate
                    start: "top 90%",          // when div enters viewport (80% from top)
                    toggleActions: "play none none reverse",
                    // play when enter, reverse when scroll back
                }
      }
    )
    gsap.fromTo(gsapRef2.current,
      {
        y: 150
      },
      {
        y: 0,
        duration: 0.6,
         scrollTrigger: {
                    trigger: gsapRef2.current,   // the div we want to animate
                    start: "top 90%",          // when div enters viewport (80% from top)
                    toggleActions: "play none none reverse",
                    // play when enter, reverse when scroll back
                }
      }
    )
    gsap.fromTo(gsapRef3.current,
      {
        y: 150
      },
      {
        y: 0,
        duration: 0.6,
        scrollTrigger: {
                    trigger: gsapRef3.current,   // the div we want to animate
                    start: "top 90%",          // when div enters viewport (80% from top)
                    toggleActions: "play none none reverse",
                    // play when enter, reverse when scroll back
                }
      }
    )
    gsap.fromTo(gsapRef4.current,
      {
        y: 150
      },
      {
        y: 0,
        duration: 0.6,
         scrollTrigger: {
                    trigger: gsapRef4.current,   // the div we want to animate
                    start: "top 90%",          // when div enters viewport (80% from top)
                    toggleActions: "play none none reverse",
                    // play when enter, reverse when scroll back
                }
      }
    )
    gsap.fromTo(gsapRef5.current,
      {
        y: 150
      },
      {
        y: 0,
        duration: 0.6,
        scrollTrigger: {
                    trigger: gsapRef5.current,   // the div we want to animate
                    start: "top 90%",          // when div enters viewport (80% from top)
                    toggleActions: "play none none reverse",
                    // play when enter, reverse when scroll back
                }
      }
    )
    gsap.fromTo(gsapRef6.current,
      {
        y: 150
      },
      {
        y: 0,
        duration: 0.6,
         scrollTrigger: {
                    trigger: gsapRef6.current,   // the div we want to animate
                    start: "top 90%",          // when div enters viewport (80% from top)
                    toggleActions: "play none none reverse",
                    // play when enter, reverse when scroll back
                }
      }
    )
  }, [])

    return (
        <>
        <div className="parentMost1">
       <div ref={gsapRef1} id='f1' className="scroll-mt-24 mx-4 bg-gradient-to-br from-yellow-700 via-yellow-500 to-yellow-700 rounded-2xl shadow-2xl p-8">
  <div className="px-4 sm:px-0">
    <h3 className="text-lg font-bold text-yellow-400 uppercase tracking-wide">
      Dressing Room
    </h3>
    <p className="mt-2 max-w-2xl text-sm text-gray-300">
      Clean, secure, and fully equipped changing facilities for your comfort.
    </p>
  </div>

  <div className="mt-6 border-t border-gray-700">
    <dl className="divide-y divide-gray-700">
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Lockers</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Spacious lockers with secure digital locks to keep your belongings safe.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Showers</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Modern showers with hot water and fresh towels provided daily.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Changing Area</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Separate male and female sections, designed for privacy and comfort.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Amenities</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Hair dryers, mirrors, grooming essentials, and hygiene supplies.
        </dd>
      </div>
    </dl>
  </div>
</div>

<br />
<br />

<div ref={gsapRef2} id='f2' className="scroll-mt-24 mx-4 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-800 rounded-2xl shadow-2xl p-8">
  <div className="px-4 sm:px-0">
    <h3 className="text-lg font-bold text-blue-400 uppercase tracking-wide">
      Swimming Pool
    </h3>
    <p className="mt-2 max-w-2xl text-sm text-gray-300">
      A state-of-the-art pool designed for fitness, relaxation, and fun.
    </p>
  </div>

  <div className="mt-6 border-t border-gray-700">
    <dl className="divide-y divide-gray-700">
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Pool Size</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Olympic-sized swimming pool with crystal-clear water filtration.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Temperature Control</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Heated pool system to maintain an ideal temperature year-round.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Safety</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Certified lifeguards on duty and safety equipment available at all times.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Extras</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Poolside lounge chairs, refreshment bar, and swim gear rentals.
        </dd>
      </div>
    </dl>
  </div>
</div>

<br />
<br />

<div ref={gsapRef3} id='f3' className="scroll-mt-24 mx-4 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl shadow-2xl p-8">
  <div className="px-4 sm:px-0">
    <h3 className="text-lg font-bold text-teal-400 uppercase tracking-wide">
      Shower Area
    </h3>
    <p className="mt-2 max-w-2xl text-sm text-gray-300">
      Clean, private, and refreshing showers to help you relax after your workout.
    </p>
  </div>

  <div className="mt-6 border-t border-gray-700">
    <dl className="divide-y divide-gray-700">
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Modern Design</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Spacious shower stalls with sleek tiles and premium fixtures.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Hot & Cold Water</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Adjustable hot and cold water options for maximum comfort.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Privacy</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Separate male and female shower areas, designed for complete privacy.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Amenities</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Fresh towels, hair dryers, body wash, and shampoo included.
        </dd>
      </div>
    </dl>
  </div>
</div>

<br />
<br />

<div ref={gsapRef4} id='f4' className="scroll-mt-24 mx-4 bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 rounded-2xl shadow-2xl p-8">
  <div className="px-4 sm:px-0">
    <h3 className="text-lg font-bold text-yellow-400 uppercase tracking-wide">
      Sauna
    </h3>
    <p className="mt-2 max-w-2xl text-sm text-orange-200">
      A relaxing heat therapy experience to detox and rejuvenate your body.
    </p>
  </div>

  <div className="mt-6 border-t border-orange-700">
    <dl className="divide-y divide-orange-700">
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-orange-100">Traditional Heat</dt>
        <dd className="mt-1 text-sm text-orange-200 sm:col-span-2 sm:mt-0">
          Dry heat sauna designed to ease muscle tension and boost circulation.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-orange-100">Relaxation</dt>
        <dd className="mt-1 text-sm text-orange-200 sm:col-span-2 sm:mt-0">
          Calm atmosphere with wooden interiors for maximum comfort.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-orange-100">Health Benefits</dt>
        <dd className="mt-1 text-sm text-orange-200 sm:col-span-2 sm:mt-0">
          Helps reduce stress, improves skin health, and promotes detoxification.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-orange-100">Capacity</dt>
        <dd className="mt-1 text-sm text-orange-200 sm:col-span-2 sm:mt-0">
          Spacious enough for small groups, with private options available.
        </dd>
      </div>
    </dl>
  </div>
</div>

<br />
<br />

<div ref={gsapRef5} id='f5' className="scroll-mt-24 mx-4 bg-gradient-to-br from-green-800 via-teal-700 to-green-900 rounded-2xl shadow-2xl p-8">
  <div className="px-4 sm:px-0">
    <h3 className="text-lg font-bold text-green-300 uppercase tracking-wide">
      Yoga Studio
    </h3>
    <p className="mt-2 max-w-2xl text-sm text-green-100">
      A serene environment designed for mindfulness, meditation, and body balance.
    </p>
  </div>

  <div className="mt-6 border-t border-green-700">
    <dl className="divide-y divide-green-700">
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-green-100">Spacious Design</dt>
        <dd className="mt-1 text-sm text-green-200 sm:col-span-2 sm:mt-0">
          Open, airy space with calming colors and natural light.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-green-100">Equipment</dt>
        <dd className="mt-1 text-sm text-green-200 sm:col-span-2 sm:mt-0">
          Yoga mats, blocks, straps, and meditation cushions provided.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-green-100">Classes</dt>
        <dd className="mt-1 text-sm text-green-200 sm:col-span-2 sm:mt-0">
          Guided sessions including Hatha, Vinyasa, Power Yoga, and Meditation.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-green-100">Ambience</dt>
        <dd className="mt-1 text-sm text-green-200 sm:col-span-2 sm:mt-0">
          Soft lighting, relaxing music, and a peaceful atmosphere.
        </dd>
      </div>
    </dl>
  </div>
</div>

<br />
<br />

<div ref={gsapRef6} id='f6' className="scroll-mt-24 mx-4 bg-gradient-to-br from-orange-800 via-amber-600 to-yellow-700 rounded-2xl shadow-2xl p-8">
  <div className="px-4 sm:px-0">
    <h3 className="text-lg font-bold text-yellow-300 uppercase tracking-wide">
      Cafeteria
    </h3>
    <p className="mt-2 max-w-2xl text-sm text-yellow-100">
      A healthy spot to refuel, relax, and connect with fellow fitness enthusiasts.
    </p>
  </div>

  <div className="mt-6 border-t border-yellow-700">
    <dl className="divide-y divide-yellow-700">
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-yellow-100">Healthy Meals</dt>
        <dd className="mt-1 text-sm text-yellow-200 sm:col-span-2 sm:mt-0">
          Nutritious options including protein bowls, salads, and fresh wraps.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-yellow-100">Smoothie Bar</dt>
        <dd className="mt-1 text-sm text-yellow-200 sm:col-span-2 sm:mt-0">
          Freshly blended smoothies, protein shakes, and energizing juices.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-yellow-100">Snacks</dt>
        <dd className="mt-1 text-sm text-yellow-200 sm:col-span-2 sm:mt-0">
          Energy bars, dry fruits, and low-calorie bites to keep you fueled.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-yellow-100">Ambience</dt>
        <dd className="mt-1 text-sm text-yellow-200 sm:col-span-2 sm:mt-0">
          Cozy seating, modern interiors, and a friendly community atmosphere.
        </dd>
      </div>
    </dl>
  </div>
</div>

<br />
<br />
</div>

        </>
    )
}

export default FacilitiesDescription