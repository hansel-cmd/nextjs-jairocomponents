import styles from '../styles/ApplyModal.module.css'

const ApplyModal = () => {
    return (
        <div className="modal fade" id="modal1" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">

                    <div className="modal-header no-border-bottom justify-content-center py-4">
                        <h5 className="modal-title text-center" id="modalLabel">You are applying for <br /> <span className="text-info">.NET Developer</span></h5>
                    </div>


                    <div className="modal-body pt-4">

                        <div className="container">
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="first_name" className="form-label">First Name</label>
                                    <input type="text" className="form-control" id="first_name" placeholder="Enter your first name..." />
                                </div>

                                {/* Last Name */}
                                <div className="col-md-6">
                                    <label htmlFor="last_name" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" id="last_name" placeholder="Enter your last name..." />
                                </div>


                                {/* Email Address */}
                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email address..." />
                                </div>

                                {/* Phone Number */}
                                <div className="col-md-6">
                                    <label htmlFor="phone_number" className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" id="phone_number" placeholder="Enter your phone number..." />
                                </div>


                                {/* Resume*/}
                                <div className="col-md-6">
                                    <label htmlFor="resume" className="form-label">Resume</label>
                                    <div className="input-group mb-3">
                                        <input type="file" className={`form-control ${styles['resume']}`}   id="resume"/>
                                        <label className="input-group-text" htmlFor="resume" style={{cursor: 'pointer'}}><i className="bi bi-cloud-upload"></i></label>
                                    </div>

                                </div>


                                {/* Referral */}
                                <div className="col-md-6">
                                    <label htmlFor="Referral" className="form-label">Referral</label>
                                    <select id="referral" className="form-select shadow-sm" role="button" aria-label="referral">
                                        <option defaultValue>Select Referral</option>
                                        <option value="x">Lorem, ipsum dolor.</option>
                                        <option value="y">Lorem, ipsum.</option>
                                        <option value="z">Lorem ipsum dolor sit.</option>
                                    </select>
                                </div>


                                <p className="pt-4 mb-0 text-secondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem atque dolorum sit modi, ex eveniet impedit itaque labore ab nobis iusto illo dignissimos quis reiciendis, asperiores quidem. Laboriosam et atque ut id inventore. Vel delectus, consequatur pariatur dolor earum ipsum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas officiis minus iusto, inventore ut vel voluptate quidem cumque dolore magnam!
                                </p>

                            </form>
                        </div>


                    </div>

                    {/* Cancel and Save buttons */}
                    <div className="modal-footer no-border-top pb-4 mb-2">
                        <div className="row w-100">
                            <div className="col d-grid d-block">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            </div>
                            <div className="col d-grid d-block">
                                <button type="button" className="btn btn-info">Apply</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApplyModal;