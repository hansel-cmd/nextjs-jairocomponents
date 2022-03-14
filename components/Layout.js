import { useRouter } from "next/router"
import Navbar from "./Navbar"
import { useState, useEffect } from "react"
import GetStartedModal from "./GetStartedModal"

const Layout = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // change isLoggedIn value inside local storage 
    // to view navbar for a user who's not logged in
    // and to remove the modal that always appear
    useEffect(() => {
        (() => {
            // this function will get the user state, i.e, logged in or not
            // the data can be found inside local storage of the browser.
            // this is set inside /sign-in page when the sign in button is clicked.
            // important: localStorage.getItem() returns a string
            setIsLoggedIn(localStorage.getItem("isLoggedIn"))
        })()
    }, [])

    const router = useRouter()

    if (router.pathname != '/sign-up' && router.pathname != '/sign-in') {

        // if user is logged in, show the modal Get Started.
        // To be implemented: the modal should no longer show when
        // user already filled up the necessary details found on his profile
        if (isLoggedIn == "true") {
            return (
                <>
                    <GetStartedModal></GetStartedModal>
                    <Navbar></Navbar>
                    <div className="py-5 p-lg-0 pt-lg-5 mt-4">
                        {children}
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <Navbar></Navbar>
                    <div className="py-5 p-lg-0 pt-lg-5 mt-4">
                        {children}
                    </div>
                </>
            );
        }
    }

    return (
        <>
            <div>
                {children}
            </div>
        </>
    );

}

export default Layout;