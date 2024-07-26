import Browser from "./Browser"
import Login from "./Login"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const Body = () => {

    const appRoute = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browser",
            element: <Browser/>
        },
        
    ])

    return(
        <RouterProvider router={appRoute}/>
    )
}

export default Body