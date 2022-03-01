import Link from 'next/link';

const SignIn = () => {

    const bg_url = '/bg_img.jpg'
    const bg_property = {
        'background': `url(${bg_url}) no-repeat`,
        'backgroundSize': 'cover',
        'backgroundClip': 'initial',
        'backgroundOrigin': 'initial',
        'boxSizing':  'border-box'
    }

    return (
        <div style={bg_property} className="vh-100 py-5 py-lg-0 pt-lg-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-1 d-none d-lg-block"></div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="px-4 card rounded-5 mb-4 shadow ">
                            <div className="card-header no-border-bottom bg-transparent pt-4 px-4 pb-0">
                                <div className="row">
                                    <div className="col-12">
                                        <h5 className="text-info">
                                            <span className="navbar-brand">
                                                <img src="/logo.png" alt="" width="200" height="84" />
                                            </span>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body px-4 pt-0">

                                <div className="pb-3">
                                    <h2 className="fw-bold">Welcome Back!</h2>
                                </div>

                                {/* Email Address */}
                                <div className="pb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" className="form-control shadow-sm" id="email" placeholder="Enter your email address..." />
                                </div>

                                {/* Password */}
                                <div className="pb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control shadow-sm" id="password" placeholder="Enter your password..." />
                                </div>

                                {/* Checkbox: keep me sign in */}
                                <div className="form-check pb-3">
                                    <input className="form-check-input" type="checkbox" id="keep_me_sign_in" />
                                    <label className="form-check-label" htmlFor="keep_me_sign_in">
                                        Keep me sign in
                                    </label>
                                </div>

                                {/* sign in button */}
                                <div className="row mb-4">
                                    <div className="col d-grid d-block">
                                        <Link href={`/view-company-jobs/[indicate_company_name]`}>
                                            <button type="button" className="btn btn-secondary">Sign In</button>
                                        </Link>
                                    </div>
                                </div>

                                {/* Forgot Password */}
                                <div className="row pb-3">
                                    <Link href="/">
                                        <a className="text-center" style={{ 'textDecoration': 'none' }}>Forgot Password?</a>
                                    </Link>
                                </div>

                                {/* ---OR--- */}
                                <div className="d-flex bd-highlight justify-content-center align-items-center pb-3">
                                    <div className="w-100 bd-highlight bg-secondary" style={{ 'height': '0.0125rem' }}></div>
                                    <div className="p-2 flex-shrink-1 bd-highlight">OR</div>
                                    <div className="w-100 bd-highlight bg-secondary" style={{ 'height': '0.0125rem' }}></div>
                                </div>


                                {/* Facebook and Google Button */}
                                <div className="row mb-4">

                                    <div className="col d-grid d-block p-1">
                                        <button type="button" className="btn btn-primary" style={{ 'backgroundColor': '#4064ac' }}>
                                            <span className="pe-2"><i className="bi bi-facebook"></i></span> Facebook
                                        </button>
                                    </div>

                                    <div className="col d-grid d-block p-1">
                                        <button type="button" className="btn btn-danger" style={{ 'backgroundColor': '#e34133' }}>
                                            <span className="pe-2"><i className="bi bi-google"></i></span> Google
                                        </button>
                                    </div>
                                </div>

                                <div className="row pb-3">
                                    <h4 className="fw-bold mb-0 text-center">New to Jairo Jobs?</h4>
                                    <h4 className="fw-bold mb-0 text-center">Join Us!</h4>
                                </div>

                                <div className="row pb-3">
                                    <Link href="/">
                                        <a className="text-center h5">Create an Account</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;