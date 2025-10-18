import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { addDoc, collection, db, auth } from "../firebase/config.js"

let Modal = (props) => {

    const { isModalOpen, isModalClose, product } = props
    const modalRef = useRef(null)
    const toastTrigger = useRef(null)
    const toastLive = useRef(null)
    const [ selectedColor, setSelectedColor ] = useState('')
    const [ additional, setAdditional ] = useState(false)

    const rating = Math.min(5, Math.floor(product?.reviews / 25))

    let setData = async() => {

        const docRef = collection(db, 'users', auth.currentUser.uid, 'cart')
await addDoc(docRef, {
    item: product?.title,
    [product.additional]: selectedColor 
})
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLive.current)
         toastBootstrap.show()
    }

useEffect(() => {
    gsap.fromTo(modalRef.current,
      {
        x: -200
      },
      {
        x: 0,
        duration: 0.5,
      }
    )
}, [isModalOpen])

    if (!isModalOpen) return null

    return (
        <>
        <div className="toast-container position-fixed top-15 right-5 end-0 p-3">
  <div
    ref={toastLive}
    id="liveToast"
    className="toast"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div className="toast-body bg-gray-800 text-white rounded">Product Added Successfully!</div>
  </div>
</div>

            <div className="w-screen h-[90vh] flex justify-center items-center absolute inset-0 z-10" style={{top: window.scrollY}}>
                <div ref={modalRef} className="w-[75%] h-3/4 bg-gray-300 rounded">
                    <div className="bg-white relative rounded">
                        <button onClick={isModalClose} className="absolute right-3 top-2"><span className="text-xl">X</span></button>
                        <div className="pt-1">

                            {/* Product info */}
                            <div className="mx-auto max-w-2xl px-4 pt-8 pb-12 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-12 lg:pb-20">
                                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                        {product?.title}
                                    </h1>
                                </div>
                                {/* Options */}
                                <div className="lg:row-span-3 lg:mt-0">
                                    <div>
                                            <img className="w-64 h-64" src={product?.img} alt={product?.title} />
                                        </div>
                                    <h2 className="sr-only">Product information</h2>
                                    <p className="text-3xl tracking-tight text-gray-900">{product?.price}</p>
                                    {/* Reviews */}
                                    <div className="mt-6">
                                        <h3 className="sr-only">Reviews</h3>
                                        <div className="flex items-center">
                                            <div className="flex items-center">
                    
                                                {
                                                    [...Array(5)].map((_, i) => (
                                                        <svg
                                                        key={i}
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    data-slot="icon"
                                                    aria-hidden="true"
                                                    className={`size-5 shrink-0 ${i < rating ? 'text-gray-900' : 'text-gray-200'}`}
                                                >
                                                    <path
                                                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                                                        clipRule="evenodd"
                                                        fillRule="evenodd"
                                                    />
                                                </svg>
                                                    ))
                                                }

                                            </div>
                                            <p className="sr-only">4 out of 5 stars</p>
                                            <a
                                                href="#"
                                                className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                            >
                                                {product?.reviews} reviews
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <form className="mt-3 flex flex-col gap-2" onSubmit={
                                        (e) => {
                                            e.preventDefault()
                                            setData()
                                        }
                                        }>
                                        {/* Colors */}
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-900">{product?.additional}</h3>
                                            <fieldset aria-label="Choose a color" className="mt-4">
                                                <div className="labels flex items-center gap-x-3">
                                                   <label
                                htmlFor={product?.additional1}
                                className={`block text-sm/6 text-yellow-600 p-2 flex rounded outline -outline-offset-1 outline-black/10 ${selectedColor === product?.additional1 && additional === 'Weight' && 'bg-gray-300'}`}
                                style={{backgroundColor: selectedColor === product?.additional1 && additional === 'Colour' && selectedColor}}
                            >
                        {product?.additional1}
                            </label>
                            <input onChange={() =>
                                {
                                    setSelectedColor(product?.additional1)
                                    setAdditional(product?.additional)
                                }
                                } className="hidden" id={product?.additional1} type="radio" value={product?.additional1} name='additional' />
                            <label
                                htmlFor={product?.additional2}
                                className={`block text-sm/6 text-yellow-600 p-2 flex rounded outline -outline-offset-1 outline-black/10 ${selectedColor === product?.additional2 && additional === 'Weight' && 'bg-gray-300'}`}
                                style={{backgroundColor: selectedColor === product?.additional2 && additional === 'Colour' && selectedColor}}
                            >
                                {product?.additional2}
                            </label>
                            <input onChange={() => 
                                {
                                    setSelectedColor(product?.additional2)
                                   setAdditional(product?.additional)
                                }
                                } className="hidden" id={product?.additional2} type="radio" value={product?.additional2} name='additional' />
                            <label
                                htmlFor={product?.additional3}
                                className={`block text-sm/6 text-yellow-600 p-2 flex rounded outline -outline-offset-1 outline-black/10 ${selectedColor === product?.additional3 && additional === 'Weight' && 'bg-gray-300'}`}
                                style={{backgroundColor: selectedColor === product?.additional3 && additional === 'Colour' && selectedColor}}
                            >
                        {product?.additional3}
                            </label>
                            <input onChange={() => 
                                {
                                    setSelectedColor(product?.additional3)
                                    setAdditional(product?.additional)
                                }
                                } className="hidden" id={product?.additional3} type="radio" value={product?.additional3} name='additional' />
                            <label
                                htmlFor={product?.additional4}
                               className={`block text-sm/6 text-yellow-600 p-2 flex rounded outline -outline-offset-1 outline-black/10 ${selectedColor === product?.additional4 && additional === 'Weight' && 'bg-gray-300'}`}
                                style={{backgroundColor: selectedColor === product?.additional4 && additional === 'Colour' && selectedColor}}
                            >
                                {product?.additional4}
                            </label>
                            <input onChange={() => 
                                {
                                    setSelectedColor(product?.additional4)
                                    setAdditional(product?.additional)
                                }
                                } className="hidden" id={product?.additional4} type="radio" value={product?.additional4} name='additional' />
                                                </div>
                                            </fieldset>
                                        </div>
                                        <div className="flex justify-center">
                                        {/* <button type="submit" className="bg-yellow-600 w-fit px-3 py-2 rounded text-white">Add To Cart</button> */}
                                        <button ref={toastTrigger} type='submit' className="bg-yellow-600 w-fit px-3 py-2 rounded text-white" id="liveToastBtn">Add To Cart</button>
                                        </div>
                                    </form>
                                    
                                </div>
                                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                                    {/* Description and details */}
                                    <div>
                                        <h3 className="sr-only">Description</h3>
                                        <div className="space-y-6">
                                            <p className="text-base text-gray-900">
                                                {product?.desc}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                                        <div className="mt-4">
                                            <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                                <li className="text-gray-400">
                                                    <span className="text-gray-600">{product?.highlight1}</span>
                                                </li>
                                                <li className="text-gray-400">
                                                    <span className="text-gray-600">
                                                        {product?.highlight2}
                                                    </span>
                                                </li>
                                                <li className="text-gray-400">
                                                    <span className="text-gray-600">
                                                        {product?.highlight3}
                                                    </span>
                                                </li>
                                                <li className="text-gray-400">
                                                    <span className="text-gray-600">{product?.highlight4}</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Modal