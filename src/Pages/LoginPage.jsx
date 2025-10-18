import { auth, db, doc, setDoc, signInWithEmailAndPassword } from "../firebase/config.js";
import { Context } from '../Context/ContextProvider.jsx'
import { useRef, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router"
import favIcon from '../assets/authentication1.png'
import gym5 from '../assets/gym5.jpg'

let LoginPage = () => {

    const navigate = useNavigate()
    const email = useRef()
    const password = useRef()
    const { setUser } = useContext(Context)

    let saveUser = async(user) => {
      const userRef = doc(db, 'users', user?.uid)

      await setDoc(userRef, {
        uid: user?.uid,
        email: user?.email,
        password: user?.password
      })
    }

    let submitHandler = (e) => {
    e.preventDefault()

signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setUser(user)
    alert('Logging in account')
    navigate('/')
    return saveUser(user)

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.error('error code: ' + errorCode + '\nerror message: ' + errorMessage)
  });
}

useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll on page load
  }, []);

    return (
<>
 <link rel="icon" href={favIcon}></link>
 <title>Authentication</title>
<div className="flex h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-cover" style={{
    backgroundImage: `url(${gym5})`,
    backgroundColor: "rgba(255, 204, 0, 0.75)", // yellow with opacity
    backgroundBlendMode: "overlay",
  }}>
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <i className="fa-solid fa-dumbbell scale-225 mx-auto h-10 w-auto pl-[30%]"></i>
      <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
        Sign in to your account
      </h2>
    </div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={submitHandler} action="#" method="POST" className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm/6 font-medium text-gray-600"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              ref={email}
              id="email"
              type="email"
              name="email"
              required=""
              autoComplete="email"
              className="block w-full rounded-md bg-yellow-200 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm/6 font-medium text-gray-600"
            >
              Password
            </label>
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-black hover:text-indigo-300"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              ref={password}
              id="password"
              type="password"
              name="password"
              required=""
              autoComplete="current-password"
              className="block w-full rounded-md bg-yellow-200 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-black sm:text-sm/6"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="rounded flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>
      <p className="mt-10 text-center text-sm/6 text-gray-800">
        Not a member?
        <Link to="/register"
          className="font-semibold text-black hover:text-indigo-300 pl-1"
        >
           Sign up here
        </Link>
      </p>
    </div>
  </div>
</>
    )
}

export default LoginPage