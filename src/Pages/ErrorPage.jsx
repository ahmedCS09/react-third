import { Link } from "react-router"
import { useContext } from "react"
import { Context } from "../Context/ContextProvider"
import favIcon from '../assets/error_favIcon.jpeg'

let ErrorPage = () => {

const {user} = useContext(Context)

    return (
        <>
        <link rel="icon" href={favIcon}></link>
        <title>404</title>
  <main className="grid h-screen bg-black place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
    <div className="text-center">
      <p className="text-base font-semibold text-yellow-500">404</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance sm:text-7xl" style={{color: 'rgb(234, 179, 8)'}}>
        Page not found
      </h1>
      <p className="mt-6 text-lg font-medium text-pretty text-yellow-500 sm:text-xl/8">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        {
            (user) ?
        <Link to="/home">
          <button className="flex absolute bottom-10 left-[45%] z-1 mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
            Back to Home
          </button>
        </Link>
        :
        <Link to="/">
          <button className="flex absolute bottom-10 left-[45%] z-1 mx-auto mt-16 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
            Back to Dashboard
          </button>
        </Link>
}
      </div>
    </div>
  </main>
</>
    )
}

export default ErrorPage