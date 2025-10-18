import { useEffect, useContext, useRef } from "react"
import { Context } from "../Context/ContextProvider"
import { gsap } from "gsap/gsap-core"

let TrainingDescription = () => {

const {theme} = useContext(Context)
const gsapRef1 = useRef(null)
    const gsapRef2 = useRef(null)
    const gsapRef3 = useRef(null)
    const gsapRef4 = useRef(null)

useEffect(() => {document.querySelector('.parentMost1').setAttribute('theme-change', theme)}, [theme])
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
  }, [])

    return (
        <>
        <div className="parentMost1">
    <div ref={gsapRef1} id='t1' className="scroll-mt-24 mx-4 bg-gradient-to-br from-yellow-700 via-yellow-500 to-yellow-700 rounded-2xl shadow-2xl p-8">
  <div className="px-4 sm:px-0">
    <h3 className="text-lg font-bold text-yellow-400 uppercase tracking-wide">
      Strength & Conditioning Trainer
    </h3>
    <p className="mt-2 max-w-2xl text-sm text-gray-300">
      A professional coach specializing in building overall strength and reducing injury risks.
    </p>
  </div>

  <div className="mt-6 border-t border-gray-700">
    <dl className="divide-y divide-gray-700">
      
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Trainer Name</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Coach Adeel Khan – Certified Strength & Conditioning Specialist with over 10 years of experience.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Training Style</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Focuses on progressive overload, functional movements, and performance-based training with emphasis on proper form and injury prevention.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Specialization</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Athlete development, strength building, weight loss programs, rehabilitation, and conditioning for sports like football and cricket.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Certifications</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          • Certified Strength & Conditioning Specialist (CSCS) <br/>
          • Diploma in Sports Science <br/>
          • First Aid & CPR Certified
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Fees & Packages</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Personal Training – PKR 8,000/month (3 sessions per week) <br/>
          Group Training – PKR 5,000/month <br/>
          Single Session – PKR 1,200
        </dd>
      </div>

    </dl>
  </div>
</div>

<br />
<br />

<div ref={gsapRef2} id='t2' className="scroll-mt-24 mx-4 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-800 rounded-2xl shadow-2xl p-8">
  <div className="px-4 sm:px-0">
    <h3 className="text-lg font-bold text-yellow-400 uppercase tracking-wide">
      Cardio & Endurance Trainer
    </h3>
    <p className="mt-2 max-w-4xl text-sm text-gray-300">
      A specialist coach focused on improving stamina, cardiovascular health, and overall endurance through structured training programs.
    </p>
  </div>

  <div className="mt-6 border-t border-gray-700">
    <dl className="divide-y divide-gray-700">
      
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Trainer Name</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Coach Sarah Malik – Certified Endurance & Cardio Specialist with 8+ years of experience.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Training Style</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Focuses on HIIT (High-Intensity Interval Training), long-distance endurance building, and personalized cardio routines to maximize stamina.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Specialization</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Running, cycling, treadmill programs, fat loss, cardiovascular conditioning, and preparation for marathons or sports performance.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Certifications</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          • Certified Personal Trainer (ACE) <br/>
          • Endurance Training Specialist <br/>
          • CPR & First Aid Certified
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Fees & Packages</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Personal Training – PKR 7,500/month (3 sessions per week) <br/>
          Group Cardio Sessions – PKR 4,000/month <br/>
          Single Session – PKR 1,000
        </dd>
      </div>

    </dl>
  </div>
</div>

<br />
<br />

<div ref={gsapRef3} id='t3' className="scroll-mt-24 mx-4 bg-gradient-to-br from-green-800 via-green-600 to-green-900 rounded-2xl shadow-2xl p-8">
  <div className="px-4 sm:px-0">
    <h3 className="text-lg font-bold text-yellow-400 uppercase tracking-wide">
      Flexibility & Mobility Trainer
    </h3>
    <p className="mt-2 max-w-5xl text-sm text-gray-300">
      A dedicated coach specializing in improving joint health, muscle elasticity, and overall body mobility for better performance and injury prevention.
    </p>
  </div>

  <div className="mt-6 border-t border-gray-700">
    <dl className="divide-y divide-gray-700">

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Trainer Name</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Coach Adeel Khan – Certified Flexibility & Mobility Specialist with 6+ years of experience.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Training Style</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Uses dynamic stretching, yoga-based movements, functional mobility drills, and corrective exercises to improve body alignment and flexibility.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Specialization</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Posture correction, injury rehabilitation, joint mobility, athletic flexibility, and overall movement efficiency.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Certifications</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          • Certified Mobility Specialist (FRC) <br/>
          • Yoga & Pilates Trainer <br/>
          • Functional Movement Screening (FMS)
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Fees & Packages</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Personal Training – PKR 6,500/month (3 sessions per week) <br/>
          Group Flexibility Classes – PKR 3,500/month <br/>
          Single Session – PKR 900
        </dd>
      </div>

    </dl>
  </div>
</div>

<br />
<br />

<div ref={gsapRef4} id='t4' className="scroll-mt-24 mx-4 bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 rounded-2xl shadow-2xl p-8">
  <div className="px-4 sm:px-0">
    <h3 className="text-lg font-bold text-yellow-400 uppercase tracking-wide">
      Nutrition & Wellness Trainer
    </h3>
    <p className="mt-2 max-w-2xl text-sm text-gray-300">
      A professional coach specializing in balanced diet planning, lifestyle guidance, and overall well-being.
    </p>
  </div>

  <div className="mt-6 border-t border-gray-700">
    <dl className="divide-y divide-gray-700">
      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Expertise</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Personalized meal plans, weight management, sports nutrition, and holistic health strategies.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Training Style</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Focuses on sustainable lifestyle changes, mindful eating, and realistic goal setting.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Benefits</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Improves energy levels, supports healthy weight, boosts immunity, and enhances mental clarity.
        </dd>
      </div>

      <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
        <dt className="text-sm font-medium text-gray-200">Fees</dt>
        <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
          Monthly package: PKR 15,000 – includes weekly check-ins, meal tracking, and customized guidance.
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

export default TrainingDescription