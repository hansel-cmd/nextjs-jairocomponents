import styles from '../styles/Navbar.module.css'
import { useRouter } from "next/router"
import Link from 'next/link'

const Navbar = () => {

    const router = useRouter();

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
            route: '/post-a-job', // post a job
            name: 'Post a job',
            is_active: '',
        }
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
                    <form className={`d-grid ${styles['btn-container']}`}>
                        <button className="btn btn-outline-info px-6 rounded-4" type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;