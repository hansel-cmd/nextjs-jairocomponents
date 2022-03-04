import Link from 'next/link'

const SignUp = () => {

    const bg_url = '/bg_img1.jpg'
    const bg_property = {
        'background': `url(${bg_url}) no-repeat`,
        'backgroundSize': 'cover',
        'backgroundClip': 'initial',
        'backgroundOrigin': 'initial',
        'boxSizing': 'border-box'
    }

    return (
        <div style={bg_property} className="vh-100 py-5 py-lg-0 pt-lg-5">
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-md-1 d-none d-lg-block"></div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
                        <div className="px-4 card rounded-5 mb-4 shadow">
                            <div className="card-body px-4 pt-4 mt-3">

                                <div className="pb-1">
                                    <h3 className="fw-bold lh-1 mb-1">Welcome to <br/><span className="text-info">Jairo Jobs</span></h3>

                                    <p className="text-secondary">
                                        Contact us now. We will surely get back to you as soon as possible.
                                    </p>
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

                                {/* Confirm Password */}
                                <div className="pb-3">
                                    <label htmlFor="confirm_password" className="form-label">Password</label>
                                    <input type="password" className="form-control shadow-sm" id="confirm_password" placeholder="Enter your password again..." />
                                </div>

                                {/* 1st filter option */}
                                <div className="pb-3">

                                    <span className="no-background text-start">
                                        Purpose
                                    </span>

                                    <select id="industry" className="form-select mt-2 shadow-sm" role="button" aria-label="industry">
                                        <option defaultValue>Default</option>
                                        <option value="x">Lorem, ipsum dolor.</option>
                                        <option value="y">Lorem, ipsum.</option>
                                        <option value="z">Lorem ipsum dolor sit.</option>
                                    </select>
                                </div>

                                {/* create account button */}
                                <div className="row mb-4">
                                    <div className="col d-grid d-block">
                                        <Link href={`/view-company-jobs/[indicate_company_name]`}>
                                            <button type="button" className="btn btn-secondary">Create an Account</button>
                                        </Link>
                                    </div>
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

                                <div className="row pb-3 text-center">
                                    <p>
                                        Have an account?
                                        <span className="px-2">
                                            <Link href="/sign-in">
                                                <a className="fw-bold">Sign In</a>
                                            </Link>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;