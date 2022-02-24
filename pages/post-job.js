import styles from '../styles/ApplyModal.module.css'

const PostJob = () => {







    return (
        <section className="text-dark px-lg-0 p-lg-0 pt-lg-5">

            <div className="container px-0 pt-5 pt-lg-0 mt-5">

                <div className="row mt-5 pt-5 d-flex flex-column justify-content-center align-items-center align-items-center">

                    <h3 className="fw-bold text-center">
                        Welcome to <span className="text-info">Jairo Jobs</span> for Employers!
                    </h3>
                    <p className="pt-3 custom-max-width text-center">Build your business with us. Work with our certified and experienced consultants, architects, and developers. We go above and beyond what's expected and will bring incredible high value to your business.</p>

                    <button className="btn btn-info w-25 mt-2">Get Started</button>
                </div>
            </div>


            <div className="container px-0 pt-5 pt-lg-0 mt-5 w-50">

                <div className="row mt-5 pt-5 d-flex flex-column justify-content-center align-items-center align-items-center">

                    <h3 className="fw-bold text-secondary">
                        Company Information
                    </h3>


                    {/* Account Information */}
                    <form className="row g-3 pb-4">

                        <h4 className="fw-bold">Account Information</h4>

                        {/* First Name */}
                        <div className="col-md-6">
                            <label htmlFor="first_name" className="form-label">First Name <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" id="first_name" placeholder="Enter your first name..." required />
                        </div>

                        {/* Last Name */}
                        <div className="col-md-6">
                            <label htmlFor="last_name" className="form-label">Last Name <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" id="last_name" placeholder="Enter your last name..." required />
                        </div>


                        {/* Email Address */}
                        <div className="col-md-6">
                            <label htmlFor="email" className="form-label">Email Address <span className='text-danger'>*</span></label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email address..." required />
                        </div>

                        {/* Phone Number */}
                        <div className="col-md-6">
                            <label htmlFor="phone_number" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="phone_number" placeholder="Enter your phone number..." />
                        </div>

                    </form>


                    {/* Company Information */}
                    <form className="row g-3 py-4">

                        <h4 className="fw-bold">Company Information</h4>

                        <div className="col-md-6">
                            <label htmlFor="first_name" className="form-label">First Name <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" id="first_name" placeholder="Enter your first name..." required />
                        </div>

                        {/* Company */}
                        <div className="col-md-6">
                            <label htmlFor="company_name" className="form-label">Company Name <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" id="company_name" placeholder="Enter your company name..." required />
                        </div>


                        {/* Company Size */}
                        <div className="col-md-6">
                            <label htmlFor="company_size" className="form-label">Company Size <span className='text-danger'>*</span></label>
                            <select id="company_size" className="form-select shadow-sm" role="button" aria-label="company_size" required>
                                <option defaultValue>Choose an Option</option>
                                <option value="x">Lorem, ipsum dolor.</option>
                                <option value="y">Lorem, ipsum.</option>
                                <option value="z">Lorem ipsum dolor sit.</option>
                            </select>
                        </div>

                        {/* Industry */}
                        <div className="col-md-6">
                            <label htmlFor="industry" className="form-label">Industry <span className='text-danger'>*</span></label>
                            <select id="industry" className="form-select shadow-sm" role="button" aria-label="industry" required>
                                <option defaultValue>Choose an Option</option>
                                <option value="x">Lorem, ipsum dolor.</option>
                                <option value="y">Lorem, ipsum.</option>
                                <option value="z">Lorem ipsum dolor sit.</option>
                            </select>
                        </div>

                        {/* Headquarters */}
                        <div className="col-md-12">
                            <label htmlFor="headquarter" className="form-label">Headquarters <span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" id="headquarter" placeholder="Enter your office location.." required />
                        </div>

                        {/* About your company */}
                        <div className="mb-3">
                            <label htmlFor="about" className="form-label">About your company</label>
                            <textarea className="form-control" id="about" rows="6" placeholder="Tell us about your company..." style={{resize: "none"}}></textarea>
                        </div>


                    </form>

                </div>

                <button className="btn btn-info w-25 mt-2">Continue</button>
            </div>
        </section>
    );
}

export default PostJob;