import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import router, { useRouter } from 'next/router';
import { useState, useEffect } from 'react';


const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // change isLoggedIn value inside local storage 
    // to see navbar for a user who's not logged in
    useEffect(() => {
        (() => { 
            // important: localStorage.getItem() returns a string
            setIsLoggedIn(localStorage.getItem("isLoggedIn"))
        })()
    }, [])


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
                    <div className={`d-grid ${styles['btn-container']}`}>
                        <Link href="/sign-in">
                            <button className="btn btn-outline-info px-6 rounded-4" type="submit">Sign In</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;