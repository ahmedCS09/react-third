import shop1 from '../assets/shop1.jpg'
import shop2 from '../assets/shop2.jpg'
import shop3 from '../assets/shop3.jpeg'
import shop4 from '../assets/shop4.jpg'
import shop5 from '../assets/shop5.jpg'
import shop6 from '../assets/shop6.jpg'
import shop7 from '../assets/shop7.jpg'
import shop8 from '../assets/shop8.jpeg'
import shop_bg from '../assets/shopping_bg.jpg'
import Modal from './Modal'
import { useRef, useEffect, useContext, useState } from 'react'
import { gsap } from 'gsap/gsap-core'
import { Context } from '../Context/ContextProvider'

let Shop = () => {

  const imgRef = useRef(null)
  const productRef = useRef(null)
  const { theme } = useContext(Context)
  const [selected, setSelected] = useState(null)
  const [ isOpen, setIsOpen ] = useState(false)

  const productData = [
    { id: 1, reviews: 115, title: 'Dumbbell Set', additional: 'Weight', additional1: '2 KG', additional2: '4 KG', additional3: '6 KG', additional4: '8 KG', info: 'Different weights, designs', highlight1: 'Adjustable weights for customized training', highlight2: 'Durable cast-iron with anti-rust coating', highlight3: 'Non-slip ergonomic handles for secure grip', highlight4: 'Compact and easy to store at home', desc: 'A versatile dumbbell set for strength training at home or the gym. Available in multiple weights and ergonomic designs for a comfortable grip and controlled workout.', price: '$10', img: shop1 },
    { id: 2, reviews: 105, title: 'Barbell', additional: 'Weight', additional1: '5 KG', additional2: '10 KG', additional3: '14 KG', additional4: '20 KG', info: 'Different designs',  highlight1: 'Heavy-duty steel bar for maximum strength', highlight2: 'Smooth rotating sleeves for safe lifting', highlight3: 'Compatible with standard and Olympic weight plates', highlight4: 'Knurled grip design for better hand control', desc: 'High-quality chest press machine designed for building upper body strength. Adjustable seating and resistance settings make it suitable for beginners to pros.', price: '$20', img: shop2 },
    { id: 3, reviews: 117, title: 'Kettlebells', additional: 'Colour', additional1: 'black', additional2: 'blue', additional3: 'red', additional4: 'green', info: 'Black in designs', highlight1: 'Solid cast-iron construction for durability', highlight2: 'Wide, comfortable handle for a secure grip', highlight3: 'Flat base for stability during storage and workouts', highlight4: 'Ideal for strength, cardio, and functional training', desc: 'Premium barbell set with durable plates and a solid grip bar. Ideal for squats, deadlifts, and bench presses to level up your strength routine.', price: '$15', img: shop3 },
    { id: 4, reviews: 54, title: 'Resistance Bands', additional: 'Colour', additional1: 'Black', additional2: 'Blue', additional3: 'Red', additional4: 'Green', info: 'Stretching guarantee', highlight1: 'Made from high-quality, durable latex material', highlight2: 'Provides multiple resistance levels for all fitness stages', highlight3: 'Lightweight and portable for home or travel workouts', highlight4: 'Perfect for strength training, mobility, and rehabilitation exercises', desc: 'Foldable electric treadmill with speed control, shock absorption, and heart-rate monitoring. Perfect for cardio, fat burning, and endurance training at home.', price: '$18', img: shop4 },
    { id: 5, reviews: 38, title: 'Pull-up Bar', additional: 'Colour', additional1: 'Black', additional2: 'Blue', additional3: 'Red', additional4: 'Green', info: 'Strong grip', highlight1: 'Heavy-duty steel construction for maximum stability and safety', highlight2: 'Easy to mount on door frames or walls without drilling (depending on model)', highlight3: 'Supports multiple exercises — pull-ups, chin-ups, leg raises, and more', highlight4: 'Non-slip foam grips ensure comfort and prevent hand fatigue', desc: 'Durable boxing gloves crafted with premium synthetic leather. Extra padding ensures safety and comfort for sparring, training, or fitness boxing.', price: '$20', img: shop5 },
    { id: 6, reviews: 120, title: 'Jump Rope', additional: 'Colour', additional1: 'Black', additional2: 'Blue', additional3: 'Red', additional4: 'Green', info: 'Different colors', highlight1: 'Adjustable length suitable for all heights and fitness levels', highlight2: 'Durable PVC-coated steel cable for long-lasting use', highlight3: 'Non-slip foam handles for a firm, comfortable grip', highlight4: 'Perfect for cardio, endurance, and coordination training', desc: 'Wall-mounted pull-up bar for intense upper body workouts. Built with heavy-duty steel and multiple grip options for pull-ups, chin-ups, and core training.', price: '$5', img: shop6 },
    { id: 7, reviews: 82, title: 'Fitness Mat', additional: 'Colour', additional1: 'Black', additional2: 'Blue', additional3: 'Red', additional4: 'Green', info: 'Colourful and comfortable', highlight1: 'High-density, non-slip surface for superior grip and stability', highlight2: 'Extra cushioning to protect joints during intense workouts', highlight3: 'Sweat-resistant and easy to clean with a damp cloth', highlight4: 'Lightweight and includes straps for easy carrying and storage', desc: 'Adjustable lightweight skipping rope built for speed, cardio, and endurance training. Perfect for warm-ups, fat burning, and cross-training exercises.', price: '$8', img: shop7 },
    { id: 8, reviews: 89, title: 'Foam Roller', additional: 'Colour', additional1: 'Black', additional2: 'Blue', additional3: 'Red', additional4: 'Green', info: 'Different colors with comfort', highlight1: 'Made with high-density EVA foam for deep tissue massage and durability', highlight2: 'Helps relieve muscle soreness and improve flexibility', highlight3: 'Textured surface enhances blood circulation and muscle recovery', highlight4: 'Lightweight and portable — perfect for home, gym, or travel use', desc: 'High-quality whey protein powder to support muscle recovery and growth. Blends easily, available in multiple flavors, and enriched with essential amino acids.', price: '$35', img: shop8 }
  ]

  useEffect(() => {
    gsap.fromTo(imgRef.current.children,
      {
        y: 100,
        duration: 0.75
      }, // start slightly lower
      {
        y: 0,
        duration: 0.75,
        stagger: 0.2, // one by one
        ease: "power3.out"
      }
    )
  }, [])

  useEffect(() => {
    document.querySelector('.parentM').setAttribute('theme-change', theme)
    document.querySelector('.heading-karve').setAttribute('theme-change', theme)
    const selectors = ['text']
    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => el.setAttribute('theme-change', theme))
    })
  }, [theme])

  return (
    <>
      <div style={{backgroundImage: `url(${shop_bg})`}} className={`parentM bg-blend-multiply bg-[rgba(0,0,0,0.3)] bg-cover ${(isOpen) && 'opacity-50'}`}>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight heading-karve">
            KARVE provides you
          </h2>
          <div ref={imgRef} className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {
              productData.map((product) => (

                <div ref={productRef} key={product?.id} onClick={() => {
                  setSelected(product)
                  setIsOpen(true)
                }
                } className="group relative">
              <img
                src={product?.img}
                alt={product?.title}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80 border"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product?.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 text-white">{product?.info}</p>
                </div>
                <p className="text text-sm font-medium text-white">{product?.price}</p>
              </div>
            </div>
              ))
            }
          </div>
        </div>
      </div>
      <Modal isModalOpen={isOpen} isModalClose={() => setIsOpen(false)}  product={selected} />
    </>
  )
}

export default Shop