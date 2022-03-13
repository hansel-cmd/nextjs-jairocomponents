import { useEffect, useRef } from 'react'
import ExpectedSalaryModal from '../components/ExpectedSalaryModal'
import styles from '../styles/MyProfile.module.css'

const MyProfile = () => {

    /** Navbar for not-logged-in user will be seen
        if you just visit /my-profile link without
        signing in via /sign-in page
    */
    return (
        <section className="text-dark px-lg-0 p-lg-0 pt-lg-5">

            <ExpectedSalaryModal></ExpectedSalaryModal>


            <div className="container px-0">

                <div className="row">
                    {/* list */}
                    <div className='col-lg-8 p-4'>

                        {/* Search and Button */}
                        <div className="row">
                            <div className="col mt-2">
                                <div className="input-group flex-nowrap">
                                    <input type="text" placeholder="Search jobs here..."
                                        className=" form-control shadow-sm no-border-right no-focus" />
                                    <span className="input-group-text no-background" id="addon-wrapping">
                                        <i className="bi bi-search"></i>
                                    </span>
                                </div>
                            </div>
                        </div>


                        {/* Sort By and Fiter Button */}
                        <div className="pt-2">

                            <div className="row">
                                {/* Sort By */}
                                <div className="col-lg-9 col-xl-10 mt-2">
                                    <div className="input-group flex-nowrap">

                                        <span className="input-group-text no-background" id="addon-wrapping">
                                            Sort By
                                        </span>

                                        <select id="sortBy" className="form-select shadow-sm" role="button" aria-label="sort-by">
                                            <option defaultValue>Default Value</option>
                                            <option value="x">Lorem, ipsum dolor.</option>
                                            <option value="y">Lorem, ipsum.</option>
                                            <option value="z">Lorem ipsum dolor sit.</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Filter Button */}
                                <div className="col-lg-3 col-xl-2 d-grid d-block mt-2">
                                    <button type="button" className="btn btn-info shadow-sm" data-bs-toggle="modal" data-bs-target="#modal">Filter <i className="bi bi-funnel-fill"></i></button>
                                </div>
                            </div>

                        </div>


                        <div className={styles['horizontal-separator']}></div>


                        <div className="pt-4">
                            {
                                [1, 2, 3, 4, 5].map((data, i) => {
                                    return <div> hello world</div>
                                })
                            }

                        </div>


                    </div>

                    {/* card */}
                    <div className="col-lg-4 p-4">
                        <div >
                            <div>
                                <div className={`${styles['position-fixed']} ${styles['position-fixed-container']}`}>
                                    <div className="card rounded-5 mb-4 shadow border border-info">
                                        <div className="card-body px-4 pt-4">
                                            <div className="row">
                                                <div className="col-10 col-sm-6">
                                                    <p className="text-secondary mb-0">Resume</p>
                                                    <p className="fs-6 fw-bold">N/A</p>
                                                </div>
                                                <div className="col-2 col-sm-6 d-flex justify-content-end align-items-start">
                                                    <button className="btn rounded-4 fs-4 text-info"><i className="bi bi-gear"></i></button>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-10 col-sm-6">
                                                <p className="text-secondary mb-0">Expected Salary</p>
                                                    <p className="fs-6 fw-bold">N/A</p>
                                                </div>
                                                <div className="col-2 col-sm-6 d-flex justify-content-end align-items-start">
                                                    <button className="btn rounded-4 fs-4 text-info" data-bs-target="#expected_salary_modal" data-bs-toggle="modal"><i className="bi bi-pencil-square"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyProfile;