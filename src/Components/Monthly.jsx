import { setDoc, db, doc, auth } from '../firebase/config'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useContext, useRef } from "react"
import { Context } from '../Context/ContextProvider'
import * as yup from "yup"
import { gsap } from 'gsap/gsap-core'

let Monthly = () => {

    const { theme } = useContext(Context)
    const gsapRef = useRef(null)

    const schema = yup
        .object({
            name: yup.string().required('Name is required').min(3, 'Name must contain atleast 3 letters'),
            email: yup.string().required('Email is required').matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"),
            phone: yup.string().required('Phone number is required').matches(/^[0-9]{4}-[0-9]{7}$/, "Phone must be in given format"),
            gender: yup.string().required('Gender is required'),
            policies: yup.boolean().oneOf([true], 'Please agree to the policies'),
            date: yup.string().required('Date is required'),
            trainer: yup.string().required('Answer is required'),
            fee: yup.number().typeError("Fee is required").min(900, 'Fee must be atleast 2500'),
            membershipType: yup.string().required('Membership type is required'),
            address: yup.string().required('Address is required').min(20, 'Must be atleast 20 letters')
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    }
    )

    let formSubmitHandler = (data) => {

        let setData = async () => {
            const docRef = doc(db, 'membership', auth.currentUser?.uid)

            await setDoc(docRef, {
                uid: auth.currentUser?.uid,
                'membership type': data?.membershipType,
                name: data?.name,
                email: data?.email,
                phone: data?.phone,
                gender: data?.gender,
                fee: data?.fee,
                policies: data?.policies,
                date: data?.date,
                address: data?.address,
                'trainer required': data?.trainer
            })
        }
        alert('Congratulations! You have become a KARVE member')
        return setData()
    }
    useEffect(() => {
        document.querySelector('.parent').setAttribute('theme-change', theme)
        const selectors = ['.text']
        selectors.forEach((selector) => {
            document.querySelectorAll(selector).forEach((el) => { el.setAttribute('theme-change', theme) })
        })
    }, [theme])

    useEffect(() => {
        gsap.fromTo(gsapRef.current,
            {
                y: -150,
                duration: 0.75
            },
            {
                y: 0,
                duration: 0.75
            })
    }, [])

    return (
        <>
            <div className="bg-gradient-to-br from-yellow-700 via-yellow-500/20 to-yellow-700 px-6 py-24 sm:py-32 lg:px-8 flex justify-center">
                <div ref={gsapRef} className='parent w-[80vw] h-auto bg-gray-100 p-10 rounded-3xl'>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-[rgb(52,79,31)] sm:text-5xl">
                        Membership Form
                    </h2>
                    <p className="text mt-2 text-lg/8 text-gray-600">
                        <span className='text-yellow-600'>Monthly Basis</span> - Enjoy your month with KARVE
                    </p>
                </div>
                <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit(formSubmitHandler)}>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="full-name"
                                className="block text-sm/6 font-semibold text-[rgb(52,79,31)]"
                            >
                                Full Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="full-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="text block w-full rounded-md bg-white/5 px-3.5 py-2 text-base outline-2 -outline-offset-1 outline-[rgb(52,79,31)] text-gray-700 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600"
                                    {...register('name')}
                                />
                                {errors.name && <span className="text-red-600">{errors.name.message}</span>}
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="email"
                                className="block text-sm/6 font-semibold text-[rgb(52,79,31)]"
                            >
                                Email
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    className="text block w-full rounded-md bg-white/5 px-3.5 py-2 text-base outline-2 -outline-offset-1 outline-[rgb(52,79,31)] text-gray-700 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600"
                                    {...register('email')}
                                />
                                {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <p className="text-sm/6 font-semibold text-[rgb(52,79,31)]">Gender</p>
                            <label
                                htmlFor="male"
                                className="block text-sm/6 text-yellow-600"
                            >
                                Male
                            </label>
                            <input id="male" type="radio" value='male' {...register('gender')} />
                            <label
                                htmlFor="female"
                                className="block text-sm/6 text-yellow-600 pl-4"
                            >
                                Female
                            </label>
                            <input id="female" type="radio" value='female' {...register('gender')} />
                        </div>
                        {errors.gender && <span className="text-red-600">{errors.gender.message}</span>}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="phone-number"
                                className="block text-sm/6 font-semibold text-[rgb(52,79,31)]"
                            >
                                Phone number
                            </label>
                            <div className="mt-2.5">
                                <div className="flex rounded-md bg-white/5 outline-1 -outline-offset-1 outline-white/10 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-yellow-600">
                                    <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country"
                                            aria-label="Country"
                                            className="col-start-1 outline-2 outline-[rgb(52,79,31)] row-start-1 w-full appearance-none rounded-tl-md rounded-bl-md bg-transparent py-2 pr-7 pl-3.5 text-base text-gray-400 placeholder:text-gray-500 focus:outline-1 focus:-outline-offset-2 focus:outline-yellow-600 sm:text-sm/6"
                                        >
                                            <option>PK</option>
                                            <option>US</option>
                                            <option>EU</option>
                                            <option>AU</option>
                                            <option>BD</option>
                                        </select>
                                        <svg
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            data-slot="icon"
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                                        >
                                            <path
                                                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                                                clipRule="evenodd"
                                                fillRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        id="phone-number"
                                        type="text"
                                        placeholder="xxxx-xxxxxxx"
                                        className="text block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 rounded-tr-md rounded-br-md text-base placeholder:text-gray-500 outline-2 outline-[rgb(52,79,31)] text-gray-700 focus:outline-yellow-600 sm:text-sm/6"
                                        {...register('phone')}
                                    />
                                </div>
                                {errors.phone && <span className="text-red-600">{errors.phone.message}</span>}
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="email"
                                className="block text-sm/6 font-semibold text-[rgb(52,79,31)]"
                            >
                                Starting Date
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="email"
                                    type="date"
                                    autoComplete="email"
                                    className="text block w-full rounded-md bg-white/5 px-3.5 py-2 text-base outline-2 -outline-offset-1 outline-[rgb(52,79,31)] text-gray-700 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600"
                                    {...register('date')}
                                />
                                {errors.date && <span className="text-red-600">{errors.date.message}</span>}
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <p className="text-sm/6 font-semibold text-[rgb(52,79,31)]">Membership Type</p>
                            <label
                                htmlFor="monthly"
                                className="block text-sm/6 text-yellow-600"
                            >
                                Monthly
                            </label>
                            <input id="monthly" type="radio" value='monthly' {...register('membershipType')} />
                        </div>
                        {errors.membershipType && <span className='text-red-600'>{errors.membershipType.message}</span>}
                         <div className="sm:col-span-2">
                            <label
                                htmlFor="email"
                                className="block text-sm/6 font-semibold text-[rgb(52,79,31)]"
                            >
                                Membership Fee
                            </label>
                            <div className="mt-2.5">
                                <input
                                    placeholder='Monthly membership requires 2,500 PKR'
                                    id="email"
                                    type="number"
                                    autoComplete="email"
                                    className="text block w-full rounded-md bg-white/5 px-3.5 py-2 text-base outline-2 -outline-offset-1 outline-[rgb(52,79,31)] text-gray-700 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600"
                                    {...register('fee')}
                                />
                                {errors.fee && <span className='text-red-600'>{errors.fee.message}</span>}
                            </div>
                        </div>
                         <div className="sm:col-span-2">
                            <p className="text-sm/6 font-semibold text-[rgb(52,79,31)]">Trainer required?</p>
                            <label
                                htmlFor="yes"
                                className="block text-sm/6 text-yellow-600"
                            >
                                Yes
                            </label>
                            <input type="radio" name="trainer" value='yes' id='yes' {...register('trainer')} />
                            <label
                                htmlFor="no"
                                className="block text-sm/6 text-yellow-600 pl-4"
                            >
                                No
                            </label>
                            <input type="radio" name="trainer" value='no' id='no' {...register('trainer')} />
                        </div>
                        {errors.trainer && <span className="text-red-600">{errors.trainer.message}</span>}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="address"
                                className="block text-sm/6 font-semibold text-[rgb(52,79,31)]"
                            >
                                Address
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="address"
                                    rows={2}
                                    className="text block w-full rounded-md bg-white/5 px-3.5 py-2 text-base outline-2 -outline-offset-1 outline-[rgb(52,79,31)] text-gray-700 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600"
                                    defaultValue={""}
                                    {...register('address')}
                                />
                            </div>
                            {errors.address && <span className='text-red-600'>{errors.address.message}</span>}
                        </div>
                        <div className="flex gap-x-4 sm:col-span-2">
                            <div className="flex h-6 items-center">
                                <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-white/5 p-px inset-ring inset-ring-white/10 outline-offset-2 outline-indigo-500 transition-colors duration-200 ease-in-out has-checked:bg-indigo-500 has-focus-visible:outline-2">
                                    <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                                    <input
                                        id="agree-to-policies"
                                        type="checkbox"
                                        {...register("policies")}
                                        aria-label="Agree to policies"
                                        className="absolute inset-0 appearance-none focus:outline-hidden"
                                    />
                                </div>
                            </div>
                            <label htmlFor="agree-to-policies" className="text text-sm/6 text-gray-600">
                                By selecting this, you agree to our
                                <a
                                    href="#"
                                    className="font-semibold whitespace-nowrap pl-1"
                                    style={{ color: 'rgb(52,79,31)' }}
                                >
                                    privacy policy
                                </a>
                                .
                            </label>
                        </div>
                        {errors.policies && <span className="text-red-600">{errors.policies.message}</span>}
                    </div>
                    <div className="mt-10 flex justify-center">
                        <button
                            type="submit"
                            className="block rounded bg-[rgb(52,79,31)] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-[rgba(44,67,27,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}

export default Monthly