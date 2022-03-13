import ExpectedSalaryModal from '../components/ExpectedSalaryModal'
import styles from '../styles/MyProfile.module.css'
import Link from 'next/link'

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

                    <div className='col-lg-8 p-4'>

                        {/* Profile Card */}
                        <div className="card rounded-5 border-highlight-left mb-4 shadow">
                            <div className="card-header no-border-bottom bg-transparent pt-3 px-4">
                                {/* Edit Profile Icon */}
                                <div className="row">
                                    <div className="col d-flex justify-content-end align-items-end">
                                        <button className="btn rounded-4 text-info"><i className="bi bi-pencil-square h5"></i></button>
                                    </div>
                                </div>
                                {/* Profile Image, and Name */}
                                <div className="row">
                                    <div className="col">
                                        <div className="row align-items-center">
                                            <div className="col-4 col-sm-3 d-flex justify-content-center">
                                                <div className="position-relative">
                                                    <img src="/velvet.png" className="border p-1 border-info rounded-circle bg-none p-0" height="150" width="150" style={{ minHeight: "110px", minWidth: "110px" }}/>
                                                    <div class={`${styles['upload-image-inner-container']}`}>
                                                        <input class={styles['inputfile']} type="file" name="pic" accept="image/*" style={{cursor: "pointer"}}/>
                                                        <label><i class="bi bi-camera-fill text-info" height="30" width="30"></i></label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-8 col-sm-9">
                                                <h4 className="text-info mb-0 fw-bold">
                                                    Velvet Crowe
                                                </h4>
                                                <p className="fw-bold text-secondary h5">Full Stack</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Personal Information */}
                            <div className="card-body px-4">
                                <div className="px-4 pb-4">
                                    <h3 className="fw-bold"><span className="text-info">Personal</span> Information</h3>
                                    <div className="row pt-2">
                                        <div className="col-12 col-sm-6">
                                            <h6 className="text-secondary">Email Address</h6>
                                            <p className="text-dark fw-bold">mainragna31@gmail.com</p>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <h6 className="text-secondary">Location</h6>
                                            <p className="text-dark fw-bold">Philippines, Mandaue</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-6">
                                            <h6 className="text-secondary">Phone Number</h6>
                                            <p className="text-dark fw-bold">12345678890</p>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <h6 className="text-secondary">Position</h6>
                                            <p className="text-dark fw-bold">Full Stack</p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>



                        <div className="pt-4">
                            {
                                [1, 2, 3, 4, 5].map((data, i) => {
                                    return <div key={i}> hello world</div>
                                })
                            }

                        </div>


                    </div>

                    <div className="col-lg-4 p-4">
                        {/* Right Floating Item */}
                        <div>
                            <div className={`${styles['position-fixed']} ${styles['position-fixed-container']}`}>

                                {/* Card */}
                                <div>
                                    <div className="card rounded-5 mb-4 shadow border border-info">
                                        <div className="card-body px-4 pt-4">

                                            {/* Resume */}
                                            <div className="row">
                                                <div className="col-10 col-sm-6 col-md-8">
                                                    <p className="text-secondary mb-0">Resume</p>
                                                    <p className="fs-6 fw-bold">N/A</p>
                                                </div>
                                                <div className="col-2 col-sm-6 col-md-4 d-flex justify-content-end align-items-start">
                                                    <div className="btn-group dropend">
                                                        <button className="btn rounded-4 fs-4 text-info" type="button" data-bs-toggle="dropdown" aria-expanded="false" title="Upload/Update Resume"><i className="bi bi-gear"></i></button>
                                                        <ul className="dropdown-menu">
                                                            <li><a className="dropdown-item" >Upload Resume</a></li>
                                                            <li><a className="dropdown-item">Update Resume</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Expected Salary */}
                                            <div className="row">
                                                <div className="col-10 col-sm-6 col-md-8">
                                                    <p className="text-secondary mb-0">Expected Salary</p>
                                                    <p className="fs-6 fw-bold">N/A</p>
                                                </div>
                                                <div className="col-2 col-sm-6 col-md-4 d-flex justify-content-end align-items-start">
                                                    <button className="btn rounded-4 fs-4 text-info" data-bs-target="#expected_salary_modal" data-bs-toggle="modal"><i className="bi bi-pencil-square"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Others */}
                                <div>
                                    <div className="container">
                                        <div className="card-body px-4 pt-4">

                                            {/* Following */}
                                            <div className="row pb-4">
                                                <div className="col-10">
                                                    <h4 className="text-dark mb-0 fw-bold">Following</h4>
                                                </div>
                                                <div className="col-2 justify-content-center d-flex">
                                                    <i className="bi bi-question-circle h5 text-secondary"></i>
                                                </div>
                                            </div>

                                            <div className="pb-4">
                                                <div className="row pb-2 text-secondary">
                                                    <div className="col-10">
                                                        <p className="mb-0">Roles and Position</p>
                                                    </div>
                                                    <div className="col-2 justify-content-center d-flex">
                                                        0
                                                    </div>
                                                </div>

                                                <div className="row pb-2 text-secondary">
                                                    <div className="col-10">
                                                        <p className="mb-0">Companies</p>
                                                    </div>
                                                    <div className="col-2 justify-content-center d-flex">
                                                        0
                                                    </div>
                                                </div>

                                            </div>

                                            {/* Referrals */}
                                            <div className="row pb-4">
                                                <div className="col-10">
                                                    <h4 className="text-dark mb-0 fw-bold">Referrals</h4>
                                                </div>
                                                <div className="col-2 justify-content-center d-flex">
                                                    <i className="bi bi-question-circle h5 text-secondary"></i>
                                                </div>
                                            </div>

                                            <div className="pb-4">
                                                <div className="row pb-2 text-secondary align-items-center">
                                                    <div className="col-10">
                                                        <h6 className="text-dark mb-0 fw-bold">
                                                            2G62DNC2V3JJJIY0R685</h6>
                                                    </div>
                                                    <div className="col-2 justify-content-center d-flex">
                                                        <i className="bi bi-intersect h5 text-dark" role="button"></i>
                                                    </div>
                                                </div>
                                            </div>

                                            <button type="button" className="btn btn-info mb-2 w-100">Check Redeemable Points</button>
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