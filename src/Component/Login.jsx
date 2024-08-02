import { useRef, useState } from "react"
import { isFormValid } from "../utils/validation"
import { createUser, logInUser } from "../utils/authentication"
import { Loader } from "./Loader"

const Login = () => {

    const [isFormLogin, setIsFormLogin] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    // const [loader, setLoader] = useState(true)

    const email = useRef(null)
    const password = useRef(null)

    const handleClick = () => {
        console.log('abcd');
        const message = isFormValid(email.current.value, password.current.value)
        setErrorMessage(message)

        if(message) return

        if(!isFormLogin){
            createUser(email.current.value, password.current.value)
        }

        if(isFormLogin){
            logInUser(email.current.value, password.current.value)
        }
    }

    const toggleForm = () => {
        setIsFormLogin(!isFormLogin)
        setErrorMessage(null)
    }

    return(
        <>
            <div className="bg-black h-screen text-white flex flex-col justify-center items-center">
                
                <h1 className="mb-10 text-4xl font-mono">{isFormLogin ? 'Log In' : 'Sign Up'}</h1>
                <form className="bg-gray-900 bg-opacity-50 py-12 px-16 min-h-52 gap-3 text-black flex flex-col" onSubmit={(e) => e.preventDefault()}>
                    {isFormLogin ? '' : <input className="p-4" type="text" placeholder="Name"/>}
                    <input className="p-4" type="text" placeholder="Email" ref={email}/>
                    {errorMessage === 'Emali is Not Valid' ? <p className="text-red-700 font-semibold mr-20">{errorMessage}</p> : ''}
                    <input className="p-4" type="password" placeholder="Password" ref={password}/>
                    {!(errorMessage === 'Emali is Not Valid') ? <p className="text-red-700 font-semibold mr-20">{errorMessage}</p> : ''}
                    <button className="bg-red-800 py-3 text-white" onClick={handleClick}>{isFormLogin ? 'Log In' : 'Sing Up'}</button>
                    <div className="flex gap-2 text-white">
                        {isFormLogin ? <p>New to Netflix?</p> : <p>Already Have Account?</p>}
                        <p className="font-bold cursor-pointer" onClick={toggleForm}>{isFormLogin ? 'Sign Up Now' : 'Log In'}</p>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login