import body1 from '../assets/body1.png'
import body2 from '../assets/body2.jpg'
import body3 from '../assets/body3.jpg'
import body4 from '../assets/body4.png'
import body5 from '../assets/body5.png'
import body6 from '../assets/body6.png'
import { useState, useEffect, useContext, useRef } from 'react'
import { Context } from '../Context/ContextProvider'
import { gsap } from 'gsap/gsap-core'

let JoinUs = () => {

  const { theme } = useContext(Context)
  const gsapRef = useRef(null)

  const [isExpanded1, setIsExpanded1] = useState(false)

  let fullText1 = 'Our gym is equipped with the latest machines, free weights, and functional training tools to help you get the most out of every workout. Our equipment is designed to support all fitness levels and training goals.'

  let words1 = fullText1.split(' ')

  let shortText1 = words1.slice(0, 10).join(' ') + ' ...'

  const [isExpanded2, setIsExpanded2] = useState(false)

  let fullText2 = 'Work with our team of certified trainers who provide personalized guidance, and create workout plans tailored to your needs. Their expertise ensures you achieve your fitness goals efficiently and safely.'

  let words2 = fullText2.split(' ')

  let shortText2 = words2.slice(0, 10).join(' ') + ' ...'

  const [isExpanded3, setIsExpanded3] = useState(false)

  let fullText3 = 'Join dynamic group classes including yoga, HIIT, Zumba, and strength training. These sessions are designed to keep you motivated, improve your fitness, and make exercising fun.'

  let words3 = fullText3.split(' ')

  let shortText3 = words3.slice(0, 10).join(' ') + ' ...'

  const [isExpanded4, setIsExpanded4] = useState(false)

  let fullText4 = 'Join dynamic group classes including yoga, HIIT, Zumba, and strength training. These sessions are designed to keep you motivated, improve your fitness, and make exercising fun.'

  let words4 = fullText4.split(' ')

  let shortText4 = words4.slice(0, 10).join(' ') + ' ...'

  const [isExpanded5, setIsExpanded5] = useState(false)

  let fullText5 = 'Receive expert advice and personalized diet plans to complement your training. Our nutrition guidance focuses on healthy, sustainable choices that boost energy, and support long-term fitness goals.'

  let words5 = fullText5.split(' ')

  let shortText5 = words5.slice(0, 10).join(' ') + ' ...'

  const [isExpanded6, setIsExpanded6] = useState(false)

  let fullText6 = 'Become part of a welcoming and supportive fitness community. Our environment encourages accountability, motivation, and camaraderie, helping you stay consistent and inspired throughout your fitness journey.'

  let words6 = fullText6.split(' ')

  let shortText6 = words6.slice(0, 10).join(' ') + ' ...'

  useEffect(() => { document.querySelector('.parentMost').setAttribute('theme-change', theme) }, [theme]);
  useEffect(() => {
    gsap.fromTo(gsapRef.current.children,
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out"
      }
    )
  }, [])

  return (
    <>
      <div className="parentMost w-full h-auto">
        <br />
        <div className="heading w-full h-auto text-center"><h1><span className='why-join'>Why Join</span><span className="text-yellow-600"> KARVE</span></h1></div>
        <br />
        <div ref={gsapRef} className="material w-full h-auto flex flex-wrap justify-center gap-5">
          <div className="card1 w-96 min-h-80 rounded bg-yellow-600 flex flex-col items-center hover:cursor-pointer hover:scale-105 transition">
            <div className="body w-auto mt-2 h-24 flex justify-center"><img src={body1} alt="" /></div>
            <br />
            <div className="text inner-heading w-[95%] h-auto"><h3>State-of-the-art Equipment</h3></div>

            <div className="inner-material w-[95%] h-auto text-lg">{(isExpanded1) ? fullText1 : shortText1}<span onClick={(isExpanded1) ? () => setIsExpanded1(false) : () => setIsExpanded1(true)} className='pl-3 underline text-sm'>{(isExpanded1) ? 'See less' : 'See more'}</span></div>
          </div>
          <div className="card2 w-96 min-h-80 rounded bg-yellow-600 flex flex-col items-center hover:cursor-pointer hover:scale-105 transition">
            <div className="body w-auto mt-2 h-24 flex justify-center"><img src={body2} alt="" /></div>
            <br />
            <div className="inner-heading w-[95%] h-auto"><h3>Expert Trainers</h3></div>

            <div className="inner-material w-[95%] h-auto text-lg">{(isExpanded2) ? fullText2 : shortText2}<span onClick={(isExpanded2) ? () => setIsExpanded2(false) : () => setIsExpanded2(true)} className='pl-3 underline text-sm'>{(isExpanded2) ? 'See less' : 'See more'}</span></div>
          </div>
          <div className="card3 w-96 min-h-80 rounded bg-yellow-600 flex flex-col items-center hover:cursor-pointer hover:scale-105 transition">
            <div className="body w-auto mt-2 h-24 flex justify-center"><img src={body3} alt="" /></div>
            <br />
            <div className="inner-heading w-[95%] h-auto"><h3>Personalized Programs</h3></div>

            <div className="inner-material w-[95%] h-auto text-lg">{(isExpanded3) ? fullText3 : shortText3}<span onClick={(isExpanded3) ? () => setIsExpanded3(false) : () => setIsExpanded3(true)} className='pl-3 underline text-sm'>{(isExpanded3) ? 'See less' : 'See more'}</span></div>
          </div>
          <div className="card4 w-96 min-h-80 rounded bg-yellow-600 flex flex-col items-center hover:cursor-pointer hover:scale-105 transition">
            <div className="body w-auto mt-2 h-24 flex justify-center"><img src={body4} alt="" /></div>
            <br />
            <div className="inner-heading w-[95%] h-auto"><h3>Nutrition Guidance</h3></div>

            <div className="inner-material w-[95%] h-auto text-lg">{(isExpanded4) ? fullText4 : shortText4}<span onClick={(isExpanded4) ? () => setIsExpanded4(false) : () => setIsExpanded4(true)} className='pl-3 underline text-sm'>{(isExpanded4) ? 'See less' : 'See more'}</span></div>
          </div>
          <div className="card5 w-96 min-h-80 rounded bg-yellow-600 flex flex-col items-center hover:cursor-pointer hover:scale-105 transition">
            <div className="body w-auto mt-2 h-24 flex justify-center"><img src={body5} alt="" /></div>
            <br />
            <div className="inner-heading w-[95%] h-auto"><h3>Community & Support</h3></div>

            <div className="inner-material w-[95%] h-auto text-lg">{(isExpanded5) ? fullText5 : shortText5}<span onClick={(isExpanded5) ? () => setIsExpanded5(false) : () => setIsExpanded5(true)} className='pl-3 underline text-sm'>{(isExpanded5) ? 'See less' : 'See more'}</span></div>
          </div>
          <div className="card6 w-96 min-h-80 rounded bg-yellow-600 flex flex-col items-center hover:cursor-pointer hover:scale-105 transition">
            <div className="body w-auto mt-2 h-24 flex justify-center"><img src={body6} alt="" /></div>
            <br />
            <div className="inner-heading w-[95%] h-auto"><h3>Flexible Memberships</h3></div>

            <div className="inner-material w-[95%] h-auto text-lg">{(isExpanded6) ? fullText6 : shortText6}<span onClick={(isExpanded6) ? () => setIsExpanded6(false) : () => setIsExpanded6(true)} className='pl-3 underline text-sm'>{(isExpanded6) ? 'See less' : 'See more'}</span></div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  )
}

export default JoinUs