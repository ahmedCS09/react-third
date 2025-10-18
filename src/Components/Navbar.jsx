import { Link, useNavigate } from "react-router"
import { useContext } from 'react'
import { Context } from '../Context/ContextProvider'
import { signOut, auth } from '../firebase/config'

let Navbar = () => {

  const { user } = useContext(Context)
  const { theme, setTheme } = useContext(Context)
  const navigate = useNavigate()

  let signOutFunc = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <>
      {/* Include this script tag or install `@tailwindplus/elements` via npm: */}
      {/*  */}
      <nav className="sticky top-0 z-10 bg-yellow-600 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-auto items-center justify-end flex-wrap gap-3">

            {/* MENU BUTTON */}
            <div className="menu absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                command="--toggle"
                commandfor="mobile-menu"
                className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-white/5 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-6 in-aria-expanded:hidden"
                >
                  <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-6 not-in-aria-expanded:hidden"
                >
                  <path
                    d="M6 18 18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex w-screen h-auto flex-1 items-center ml-[45%] sm:ml-[5%] whitespace-nowrap sm:justify-start">
              <div className="flex shrink-0 items-center mt-2 sm:mt-0">
                <i className="fa-solid fa-dumbbell scale-225"></i>
                <h1 className="hidden sm:block pl-5">KARVE</h1>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="links flex space-x-4">
                  {/* Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" */}
                  {
                    (user) ? <Link
                      to="/"
                      className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white"
                    >
                      Home
                    </Link>
                      :
                      <Link
                        to="/"
                        className="rounded-md bg-gray-950/50 px-3 py-2 text-sm font-medium text-white"
                      >
                        Dashboard
                      </Link>
                  }
                  <Link
                    to="/joinUs"
                    className="focus:outline-none active:ring-2 active:ring-blue-500 rounded-md bg-gray-950/20 hover:bg-gray-950/50 px-3 py-2 text-sm font-medium text-white"
                  >
                    Why join us
                  </Link>
                  <Link
                    to="/shop"
                    className={`${(user) ? 'block' : 'hidden'}  rounded-md bg-gray-950/20 hover:bg-gray-950/50 px-3 py-2 text-sm font-medium text-white`}
                  >
                    Shop
                  </Link>
                  {
                    (user) ?
                      <Link
                        onClick={() => signOutFunc()}
                        className="rounded-md bg-gray-950/20 hover:bg-gray-950/50 px-3 py-2 text-sm font-medium text-white ml-10"
                      >
                        Logout
                      </Link>
                      :
                      <Link
                        to="/login"
                        className="rounded-md bg-gray-950/20 hover:bg-gray-950/50 px-3 py-2 text-sm font-medium text-white ml-10"
                      >
                        Login
                      </Link>
                  }
                </div>
              </div>
            </div>
            <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="dropdown">
                <button
                  className="text-white btn dropdown-btn dropdown-toggle rounded-md px-3 py-2 text-sm font-medium h-auto theme-link absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Change theme
                </button>
                <ul className={`dropdown-menu ${(theme) === 'light' ? 'bg-black text-white' : 'bg-white text-black'} border border-white`}>
                  {
                    (theme) === 'light' ?

                      <li>
                        <a onClick={(e) => {
                          e.preventDefault()
                          setTheme('dark')
                        }} className="dropdown-item text-white" href="#">
                          Dark
                        </a>
                      </li>
                      :
                      <li>
                        <a onClick={(e) => {
                          e.preventDefault()
                          setTheme('light')
                        }} className="dropdown-item text-black" href="#">
                          Light
                        </a>
                      </li>
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        <el-disclosure id="mobile-menu" hidden="" className="block sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {/* Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" */}

            {
              (user) ? <Link
                to="/"
                className="block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white"
              >
                Home
              </Link>
                :
                <Link
                  to="/"
                  className="block rounded-md bg-gray-950/50 px-3 py-2 text-base font-medium text-white"
                >
                  Dashboard
                </Link>
            }

            <Link
              to="/joinUs"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-950/20 text-white"
            >
              Why join us
            </Link>
            <Link
              to="/shop"
              className={`${(user) ? 'block' : 'hidden'}  block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-950/20 text-white`}
            >
              Shop
            </Link>

            {
              (user) ?
                <Link
                  onClick={() => signOutFunc()}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-950/20 text-white"
                >
                  Logout
                </Link>
                :
                <Link
                  to="/login"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-950/20 text-white"
                >
                  Login
                </Link>
            }
          </div>
        </el-disclosure>
      </nav>
    </>

  )
}

export default Navbar