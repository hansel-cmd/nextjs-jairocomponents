import styles from '../styles/Navbar.module.css'
import NotificationContainer from './NotificationContainer'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'


const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // change isLoggedIn value inside local storage 
    // to view navbar for a user who's not logged in
    useEffect(() => {
        (() => {
            // important: localStorage.getItem() returns a string
            setIsLoggedIn(localStorage.getItem("isLoggedIn"))
        })()
    }, [])

    const signOut = () => localStorage.setItem('isLoggedIn', false)

    const router = useRouter()
    let links = [
        {
            route: '/', // home
            name: 'none',
            is_active: router.pathname == '/' ? styles['navbar-link-active'] : '',
        },
        {
            route: '/listing', // find a job
            name: 'Find a job',
            is_active: router.pathname == '/listing' ? styles['navbar-link-active'] : '',
        },
        {
            route: '/companies', // companies
            name: 'Companies',
            is_active: router.pathname == '/companies' ? styles['navbar-link-active'] : '',
        },
        {
            route: '/post-job', // post a job
            name: 'Post a job',
            is_active: router.pathname == '/post-job' ? styles['navbar-link-active'] : '',
        },
    ]

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-white border-bottom">
            <div className="container">

                <Link href="/">
                    <img src="/logo.png" width="160" height="75" role="button"></img>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className={`navbar-nav mb-2 mb-lg-0 ${styles['navbar-ul']}`}>
                        {
                            links.map((link, ndx) => {

                                if (ndx == 0) return null
                                if (ndx == 3 && isLoggedIn == "true") return null

                                return (
                                    <li key={ndx} className={
                                        `nav-item 
                                        ${styles['hover-bottom-border']} 
                                        ${link['is_active']}`
                                    }>
                                        <Link href={link.route}>
                                            <a className="nav-link">{link.name}</a>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <div className={styles['navbar-pipe']}>
                    </div>

                    <div className="d-flex align-items-center justify-content-between flex-lg-row flex-row-reverse">

                        {/* Messages and Notifications button : when logged in */}

                        <div className={`align-items-center justify-content-center ${styles['btn-container']}`} style={{ display: isLoggedIn == "true" ? "flex" : "none" }}>
                            
                            {/* Message Icon */}
                            <div className="dropdown dropstart">
                                <span className="h3 text-info ps-2 pe-3 mb-0" role="button" data-bs-toggle="dropdown"><i className="bi bi-envelope"></i></span>

                                <div className="dropdown-menu py-0" style={{border: "none"}}>
                                    <div>
                                        <NotificationContainer info={{title: "Messages"}}></NotificationContainer>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Notif Icon */}
                            <div className="dropdown dropstart">
                                <span className="h3 text-info ps-2 pe-3 mb-0" role="button" data-bs-toggle="dropdown"><i className="bi bi-bell-fill"></i></span>

                                <div className="dropdown-menu py-0" style={{border: "none"}}>
                                    <div>
                                        <NotificationContainer info={{title: "Notifications"}}></NotificationContainer>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={`d-grid ${styles['btn-container']}`}>

                            {/* Sign In Button : when not logged in */}
                            <Link href="/sign-in">
                                <button className="btn btn-outline-info px-6 rounded-4" type="submit" style={{ display: isLoggedIn == "true" ? "none" : "block" }}>Sign In</button>
                            </Link>

                            {/* My Account Button : when logged in */}
                            <div className="dropdown" style={{ display: isLoggedIn == "true" ? "block" : "none" }}>
                                <button className="btn btn-outline-info px-4 rounded-4 dropdown-toggle" type="button" id="my_account" data-bs-toggle="dropdown" aria-expanded="false">
                                    My Account
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="my_account">
                                    <li>
                                        <Link href="/my-profile">
                                            <a className="dropdown-item">My Profile</a>
                                        </Link>
                                    </li>
                                    <li><a className="dropdown-item">My Dashboard</a></li>
                                    <li><a className="dropdown-item">Settings</a></li>
                                    <li>
                                        <Link href="/sign-in">
                                            <a className="dropdown-item" onClick={signOut}>Logout</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;