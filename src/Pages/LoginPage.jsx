import { getAuth, createUserWithEmailAndPassword } from "../firebase/config.js";
import { authContext } from '../Context/AuthContextProvider.jsx'
import { useRef, useContext } from "react";

let LoginPage = () => {

    const email = useRef()
    const password = useRef()
    const [user, setUser] = useContext(authContext)

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

    return (
<>
<h1>LOGIN PAGE</h1>
</>
    )
}

export default LoginPage