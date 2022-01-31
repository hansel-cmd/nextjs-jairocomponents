import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">

                <img src="/logo.png" width="160" height="75" ></img>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className={`navbar-nav mb-2 mb-lg-0 ${styles['navbar-ul']}`}>
                        <li className={`nav-item ${styles['hover-bottom-border']}`}>
                            <a className="nav-link active" href="#">Find a job</a>
                        </li>
                        <li className={`nav-item ${styles['hover-bottom-border']}`}>
                            <a className="nav-link" href="#">Companies</a>
                        </li>
                        <li className={`nav-item ${styles['hover-bottom-border']}`}>
                            <a className="nav-link" href="#">Post a Job</a>
                        </li>
                    </ul>

                    <div className={styles['navbar-link-container']}>
                    </div>
                    <form className={`d-grid ${styles['btn-container']}`}>
                        <button className="btn btn-outline-info px-6" type="submit">Sign In</button>
                    </form>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;