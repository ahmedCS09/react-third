import { Link } from "react-router";
import { gsap } from "gsap/gsap-core";
import { useEffect, useRef } from "react";

let Membership = () => {

    const gsapRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(gsapRef.current.children,
            {
                y: -200
            },
            {
                y: 0,
                stagger: 0.1,
                duration: 0.6
            }
        )
    }, [])

    return (
        <>
            <div className="relative isolate bg-yellow-500 px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold text-yellow-400">Membership</h2>
                    <p className="mt-2 text-5xl font-bold tracking-tight text-white sm:text-6xl">
                        Become a Member
                    </p>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-300">
                        Choose the membership that suits your lifestyle. Get full access to
                        all gym facilities, trainers, and premium benefits.
                    </p>
                </div>

                {/* Cards */}
                <div ref={gsapRef} className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3 max-w-6xl mx-auto">

                    {/* Monthly Plan */}
                    <div className="rounded-3xl bg-gray-800 p-8 ring-1 ring-gray-700">
                        <h3 className="text-xl font-semibold text-white">Monthly</h3>
                        <p className="mt-4 flex items-baseline gap-x-2">
                            <span className="text-4xl font-bold text-yellow-400">Rs. 2500</span>
                            <span className="text-base text-gray-400">/month</span>
                        </p>
                        <ul className="mt-6 space-y-3 text-gray-300 text-sm">
                            <li>✔ Unlimited gym access</li>
                            <li>✔ Group classes included</li>
                            <li>✔ Free trainer guidance</li>
                            <li>✔ Locker & shower facility</li>
                        </ul>
                        <Link
                            to='/monthly'
                            className="mt-8 block rounded-md bg-yellow-400 px-4 py-2 text-center text-sm font-bold text-gray-900 hover:bg-yellow-300"
                        >
                            Join Now
                        </Link>
                    </div>

                    {/* Quarterly Plan */}
                    <div className="rounded-3xl bg-gray-800 p-8 ring-2 ring-yellow-400 scale-105">
                        <h3 className="text-xl font-semibold text-white">Quarterly</h3>
                        <p className="mt-4 flex items-baseline gap-x-2">
                            <span className="text-4xl font-bold text-yellow-400">Rs. 7000</span>
                            <span className="text-base text-gray-400">/3 months</span>
                        </p>
                        <ul className="mt-6 space-y-3 text-gray-300 text-sm">
                            <li>✔ Unlimited gym access</li>
                            <li>✔ 1 Personal training session/month</li>
                            <li>✔ Nutrition & diet guidance</li>
                            <li>✔ Free fitness assessment</li>
                        </ul>
                        <Link
                            to='/quarterly'
                            className="mt-8 block rounded-md bg-yellow-400 px-4 py-2 text-center text-sm font-bold text-gray-900 hover:bg-yellow-300"
                        >
                            Join Now
                        </Link>
                    </div>

                    {/* Yearly Plan */}
                    <div className="rounded-3xl bg-gray-800 p-8 ring-1 ring-gray-700">
                        <h3 className="text-xl font-semibold text-white">Yearly</h3>
                        <p className="mt-4 flex items-baseline gap-x-2">
                            <span className="text-4xl font-bold text-yellow-400">Rs. 25,000</span>
                            <span className="text-base text-gray-400">/year</span>
                        </p>
                        <ul className="mt-6 space-y-3 text-gray-300 text-sm">
                            <li>✔ Unlimited gym access</li>
                            <li>✔ Free personal trainer consultation</li>
                            <li>✔ Sauna & recovery zone access</li>
                            <li>✔ Discount on supplements & merchandise</li>
                        </ul>
                        <Link
                            to='/yearly'
                            className="mt-8 block rounded-md bg-yellow-400 px-4 py-2 text-center text-sm font-bold text-gray-900 hover:bg-yellow-300"
                        >
                            Join Now
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Membership