import { useEffect, useState } from 'react'
import styles from '../../../styles/ApplyModal.module.css'

const JobPage = () => {

    const [isFormActive, setFormActive] = useState(false)
    const toggleClass = () => setFormActive(!isFormActive)


    return (
        <section className="text-dark px-lg-0 p-lg-0 pt-lg-5 mt-5">

            <div className="container px-0 pt-5 pt-lg-0">
                <div className="card-header no-border-bottom bg-transparent pt-4 pb-0 px-4">
                    <div className="row align-items-center pb-3">
                        <div className="col-10 col-sm-8">
                            <h4 className="text-dark mb-0">
                                <span className="navbar-brand">
                                    <img src="/logo2.png" alt="" width="64" height="64" />
                                </span>
                                Jairosoft Inc.
                            </h4>
                        </div>
                        <div className="col-2 col-sm-4 d-flex justify-content-end align-items-start">
                            <span className='fs-7 text-dark'>March 20, 2022</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 col-sm-8">
                            <h3 className="text-info fw-bold">.NET Developer</h3>
                            <p className="fs-6 text-dark">Davao City and Cebu City, Philippines</p>
                        </div>
                        <div className="col-10 col-sm-4">
                            <p className="fs-7 text-dark text-end" style={{ backgroundColor: "1px solid black !important" }}>
                                <i className="bi bi-share px-1 rounded" role="button" style={{ border: "1px solid #C4C4C4", color: "#C4C4C4" }}></i>
                            </p>
                            <p className="fs-7 text-dark text-end">Applicants: 9</p>
                        </div>
                    </div>
                </div>

                <div className="card-body px-4">

                    {/* 3 Column Card */}
                    <div className="row pb-4 px-2 mb-4">
                        <div className="col-4 bg-primary px-4 p-3" style={{ borderTopLeftRadius: "1rem", borderBottomLeftRadius: "1rem" }}>
                            <p className="text-white mb-0">Type</p>
                            <p className="text-white fw-bold mb-0">Full Time</p>
                        </div>
                        <div className="col-4 bg-secondary px-4 p-3">
                            <p className="text-white mb-0">Work Set-up</p>
                            <p className="text-white fw-bold mb-0">Remote (Temporary)</p>
                        </div>
                        <div className="col-4 bg-info px-4 p-3" style={{ borderTopRightRadius: "1rem", borderBottomRightRadius: "1rem" }}>
                            <p className="text-white mb-0">Salary</p>
                            <p className="text-white fw-bold mb-0">P25,000 - P30,000</p>
                        </div>
                    </div>


                        <div className="row">

                            {/* Apply Now Form */}
                            <div className="col-lg-6 col-xl-4 pe-4" style={{display: !isFormActive ? 'none' : 'block' }}>
                                <div className="card rounded-5 bg-outline-primary-opacity-5 text-dark">
                                    <div className="card-header no-border-bottom bg-transparent pt-4 pb-2 my-4">
                                        <h3 className="fw-bold text-center">
                                            You are Applying for Product Designer
                                        </h3>
                                    </div>
                                    <div className="card-body px-5 pt-0">

                                        <form className="row g-3">
                                            <div>
                                                <label htmlFor="first_name" className="form-label">First Name</label>
                                                <input type="text" className="form-control bg-transparent border border-primary" id="first_name" placeholder="Enter your first name..." />
                                            </div>

                                            {/* Last Name */}
                                            <div>
                                                <label htmlFor="last_name" className="form-label">Last Name</label>
                                                <input type="text" className="form-control bg-transparent border border-primary" id="last_name" placeholder="Enter your last name..." />
                                            </div>


                                            {/* Email Address */}
                                            <div>
                                                <label htmlFor="email" className="form-label">Email Address</label>
                                                <input type="email" className="form-control bg-transparent border border-primary" id="email" placeholder="Enter your email address..." />
                                            </div>

                                            {/* Phone Number */}
                                            <div>
                                                <label htmlFor="phone_number" className="form-label">Phone Number</label>
                                                <input type="text" className="form-control bg-transparent border border-primary" id="phone_number" placeholder="Enter your phone number..." />
                                            </div>


                                            {/* Resume*/}
                                            <div>
                                                <label htmlFor="resume" className="form-label">Resume</label>
                                                <div className="input-group mb-3">
                                                    <input type="file" className={`form-control bg-transparent border border-primary ${styles['resume']}`} id="resume" placeholder="Upload Resume..."/>
                                                    <label className="input-group-text border border-primary" htmlFor="resume" style={{ cursor: 'pointer' }}><i className="bi bi-cloud-upload"></i></label>
                                                </div>

                                            </div>

                                            {/* Form: Apply Button */}
                                            <div className="row py-4">
                                                <div className="col">
                                                    <button className="btn btn-primary px-5 py-2">Apply</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>

                            {/* Job Details */}
                            <div className={ !isFormActive ? 'col-lg-6 col-xl-12' : 'col-lg-6 col-xl-8' }>

                                {/* Position Description */}
                                <div className="pb-3 pt-4 mt-5">
                                    <h6 className="text-primary fw-bold text-uppercase">Position Description:</h6>
                                    <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eius tempore ad debitis ipsa impedit omnis aliquam id. Architecto voluptate quidem, perferendis minus sint illum illo, dolor, harum voluptas veniam ratione totam exercitationem. Quos, nam. Iste ipsum velit voluptas distinction. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, eligendi!</p>
                                </div>

                                {/* Job Responsibilities */}
                                <div className="pb-3 pt-4">
                                    <h6 className="text-primary fw-bold text-uppercase">Job Responsibilities:</h6>
                                    <ul className="text-dark list-unstyled">
                                        <li>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam laborum.
                                        </li>
                                        <li>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur deserunt, laboriosam labore odit maiores atque?
                                        </li>
                                        <li>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos asperiores repudiandae commodi fuga! Distinctio nemo iure iusto nihil unde sunt.
                                        </li>
                                        <li>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam laborum. Lorem ipsum dolor sit.
                                        </li>
                                        <li>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere impedit, aut harum, architecto vero qui soluta, placeat odio ut nihil quisquam repellendus recusandae.
                                        </li>
                                        <li>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam laborum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        </li>
                                        <li>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas ipsa velit dolor aliquam quo cum quae minima!
                                        </li>
                                        <li>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis et cupiditate nihil dignissimos repellat!
                                        </li>
                                        <li>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam laborum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        </li>
                                        <li>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, dicta placeat.
                                        </li>
                                        <li>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, debitis quod quam amet accusamus temporibus!
                                        </li>
                                    </ul>
                                </div>

                                {/* Qualifications */}
                                <div className="pb-3 pt-4">
                                    <h6 className="text-primary fw-bold text-uppercase">Qualifications:</h6>
                                    <ul className="text-dark list-unstyled">
                                        <li>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam laborum.
                                        </li>
                                        <li>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        </li>
                                        <li>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptas ipsa velit dolor aliquam quo cum quae minima!
                                        </li>
                                        <li>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam laborum. Lorem ipsum dolor sit amet.
                                        </li>
                                        <li>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam laborum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere impedit, aut harum, architecto vero qui soluta, placeat odio ut nihil quisquam repellendus recusandae.
                                        </li>
                                        <li>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nam laborum. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                        </li>
                                    </ul>
                                </div>

                                {/* Apply Now, View Company Button */}
                                <div className="row mb-4 gx-4 mt-5">
                                    <div className="col">
                                        <button type="button" className="btn btn-primary px-4 py-2 me-4" onClick={toggleClass}>Apply Now</button>
                                        <button type="button" className="btn btn-primary px-4 py-2">View Company</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>

            </div>
        </section>
    );
}

export default JobPage;