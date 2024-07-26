const Login = () => {
    return(
        <>
            <div className="bg-black h-screen text-white flex flex-col justify-center items-center">
                <h1>Log In</h1>
                
                    <form className="bg-green-950 py-12 px-16 h-1/2 w-1/3 gap-3 text-black flex flex-col">
                        <input className="p-4" type="text" placeholder="Email"/>
                        <input className="p-4" type="password" placeholder="Password"/>
                        <button className="bg-red-500 text-white" >Log In</button>
                    </form>
            </div>
        </>
    )
}

export default Login