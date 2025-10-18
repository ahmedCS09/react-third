import { setDoc, db, doc, auth } from '../firebase/config'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useContext } from "react"
import { Context } from '../Context/ContextProvider'
import * as yup from "yup"

let Admission = () => {

    const {theme} = useContext(Context)

    const schema = yup
        .object({
            fName: yup.string().required('First name is required').min(3, 'Name must contain atleast 3 letters'),
            lName: yup.string().required('Last name is required').min(3, 'Name must contain atleast 3 letters'),
            email: yup.string().required('Email is required').matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"Invalid email format"),
            phone: yup.string().required('Phone number is required').matches(/^[0-9]{4}-[0-9]{7}$/, "Phone must be in given format"),
            gender: yup.string().required('Gender is required'),
            policies: yup.boolean().oneOf([true], 'Please agree to the policies')
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
            const docRef = doc(db, 'data', auth.currentUser?.uid)

            await setDoc(docRef, {
                uid: auth.currentUser?.uid,
                fName: data?.fName,
                lName: data?.lName,
                email: data?.email,
                phone: data?.phone,
                gender: data?.gender,
                policies: data?.policies
            })
        }
        alert('Your class has been booked. Keep checking your email.')
        return setData()
    }

    useEffect(() => {
        document.querySelector('.parentMost').setAttribute('theme-change', theme)
        const selectors = ['.text']
        selectors.forEach((selector) => {
            document.querySelectorAll(selector).forEach((el) => {el.setAttribute('theme-change', theme)})
        })
    }, [theme])

    return (
        <>
            <div className="parentMost bg-[rgb(242,234,211)] px-6 py-24 sm:py-32 lg:px-8">
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                >
                    <div
                        style={{
                            clipPath:
                                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                        }}
                        className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-40rem)] sm:w-288.75"
                    />
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-balance text-[rgb(52,79,31)] sm:text-5xl">
                        Book Your Class
                    </h2>
                    <p className="text mt-2 text-lg/8 text-gray-600">
                        Limited slots available — reserve yours today!
                    </p>
                </div>
                <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={handleSubmit(formSubmitHandler)}>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <label
                                htmlFor="first-name"
                                className="block text-sm/6 font-semibold text-[rgb(52,79,31)]"
                            >
                                First name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="text block w-full rounded-md bg-white/5 px-3.5 py-2 text-base outline-2 -outline-offset-1 outline-[rgb(52,79,31)] text-gray-700 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600"
                                    {...register('fName')}
                                />
                                {errors.fName && <span className="text-red-600">{errors.fName.message}</span>}
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="last-name"
                                className="block text-sm/6 font-semibold text-[rgb(52,79,31)]"
                            >
                                Last name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    id="last-name"
                                    type="text"
                                    autoComplete="family-name"
                                    className="text block w-full rounded-md bg-white/5 px-3.5 py-2 text-base outline-2 -outline-offset-1 outline-[rgb(52,79,31)] text-gray-700 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600"
                                    {...register('lName')}
                                />
                                {errors.lName && <span className="text-red-600">{errors.lName.message}</span>}
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
                                htmlFor="message"
                                className="block text-sm/6 font-semibold text-[rgb(52,79,31)]"
                            >
                                Message
                            </label>
                            <div className="mt-2.5">
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="text block w-full rounded-md bg-white/5 px-3.5 py-2 text-base outline-2 -outline-offset-1 outline-[rgb(52,79,31)] text-gray-700 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-600"
                                    defaultValue={""}
                                    {...register('message')}
                                />
                                <span> (optional)</span>
                            </div>
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
        </>
    )
}

export default Admission