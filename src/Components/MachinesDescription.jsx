import { useEffect, useContext, useRef } from "react"
import { Context } from "../Context/ContextProvider"
import { gsap } from "gsap/gsap-core"

let MachinesDescription = () => {

    const { theme } = useContext(Context)
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
                <div ref={gsapRef1} id='m1' className="scroll-mt-24 mx-4 bg-gradient-to-br from-yellow-700 via-yellow-500 to-yellow-700 rounded-2xl shadow-2xl p-8">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-bold text-yellow-400 uppercase tracking-wide">
                            Leg Press
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm text-gray-300">
                            A versatile machine designed to strengthen and tone your lower body with controlled resistance.
                        </p>
                    </div>

                    <div className="mt-6 border-t border-gray-700">
                        <dl className="divide-y divide-gray-700">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Target Muscles</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Quadriceps, hamstrings, glutes, and calves for complete lower-body strength.
                                </dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Benefits</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Builds muscle endurance, improves leg power, and supports athletic performance.
                                </dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Adjustability</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Multiple weight settings with safety locks, suitable for both beginners and advanced lifters.
                                </dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Comfort</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Ergonomic cushioned seat and back support to maintain posture during workouts.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>


                <br />
                <br />

                <div ref={gsapRef2} id='m2' className="scroll-mt-24 mx-4 bg-gradient-to-br from-blue-800 via-blue-600 to-blue-800 rounded-2xl shadow-2xl p-8">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-bold text-yellow-400 uppercase tracking-wide">
                            T-Bar Row
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm text-gray-300">
                            A powerful strength training machine designed to build a strong and defined back.
                        </p>
                    </div>

                    <div className="mt-6 border-t border-gray-700">
                        <dl className="divide-y divide-gray-700">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Target Muscles</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Lats, traps, rhomboids, rear delts, and biceps for a complete upper-back workout.
                                </dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Benefits</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Increases back thickness, improves posture, and enhances pulling strength.
                                </dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Adjustability</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Multiple grip options (wide, narrow, neutral) for versatile back training.
                                </dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Comfort</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Padded chest support and stable platform reduce strain and ensure safe lifting.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>


                <br />
                <br />

                <div ref={gsapRef3} id='m3' className="scroll-mt-24 mx-4 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-2xl shadow-2xl p-8">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-bold text-yellow-400 uppercase tracking-wide">
                            Treadmill
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm text-gray-300">
                            A modern cardio machine designed to boost stamina, burn calories, and improve heart health.
                        </p>
                    </div>

                    <div className="mt-6 border-t border-gray-700">
                        <dl className="divide-y divide-gray-700">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Workout Options</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Walk, jog, sprint, or climb with customizable speed and incline settings.
                                </dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Features</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Digital console with heart-rate monitor, calorie tracker, and preset workout programs.
                                </dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Benefits</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Enhances cardiovascular health, improves endurance, and aids in weight loss.
                                </dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Comfort</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Shock-absorbing running deck reduces joint impact for a smooth and safe run.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>


                <br />
                <br />

                <div ref={gsapRef4} id='m4' className="scroll-mt-24 mx-4 bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 rounded-2xl shadow-2xl p-8">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-bold text-yellow-400 uppercase tracking-wide">
                            Shoulder Press
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm text-gray-300">
                            A strength-training machine focused on building strong and defined shoulder muscles.
                        </p>
                    </div>

                    <div className="mt-6 border-t border-gray-700">
                        <dl className="divide-y divide-gray-700">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Primary Muscles</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Targets deltoids, triceps, and upper chest for overall shoulder strength.
                                </dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Adjustability</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Adjustable seat and handles ensure correct posture and effective muscle engagement.
                                </dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Benefits</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Improves shoulder strength, enhances upper body stability, and supports better posture.
                                </dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Usage</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Ideal for both beginners and advanced athletes, offering safe and guided overhead pressing.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>


                <br />
                <br />

                <div ref={gsapRef5} id='m5' className="scroll-mt-24 mx-4 bg-gradient-to-br from-green-800 via-teal-700 to-green-900 rounded-2xl shadow-2xl p-8">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-bold text-yellow-400 uppercase tracking-wide">
                            Front Lat Pull Down
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm text-gray-300">
                            A classic strength machine designed to develop your back muscles and improve upper body power.
                        </p>
                    </div>

                    <div className="mt-6 border-t border-gray-700">
                        <dl className="divide-y divide-gray-700">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Primary Muscles</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Targets latissimus dorsi, biceps, traps, and rear deltoids for a wider, stronger back.
                                </dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Adjustability</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Adjustable thigh pads and grips ensure proper form and stability during each rep.
                                </dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Benefits</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Builds a wide “V-shaped” back, strengthens pulling power, and enhances posture.
                                </dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Usage</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Sit with your thighs secured, grip the bar wider than shoulder-width, and pull down to chest level with control.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>


                <br />
                <br />

                <div ref={gsapRef6} id='m6' className="scroll-mt-24 mx-4 bg-gradient-to-br from-orange-800 via-amber-600 to-yellow-700 rounded-2xl shadow-2xl p-8">
                    <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-bold text-yellow-400 uppercase tracking-wide">
                            Leg Extension
                        </h3>
                        <p className="mt-2 max-w-2xl text-sm text-gray-300">
                            An isolation machine focused on strengthening and sculpting the quadriceps for powerful leg development.
                        </p>
                    </div>

                    <div className="mt-6 border-t border-gray-700">
                        <dl className="divide-y divide-gray-700">
                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Primary Muscles</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Quadriceps (front thigh muscles) for strength, shape, and definition.
                                </dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Adjustability</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Adjustable backrest and ankle pads to suit different body sizes and ensure safe knee alignment.
                                </dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Benefits</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Improves knee stability, isolates quads for hypertrophy, and enhances athletic performance.
                                </dd>
                            </div>

                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                <dt className="text-sm font-medium text-gray-200">Usage</dt>
                                <dd className="mt-1 text-sm text-gray-200 sm:col-span-2 sm:mt-0">
                                    Sit upright, place your ankles behind the padded bar, and extend your legs slowly until fully straightened.
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

export default MachinesDescription