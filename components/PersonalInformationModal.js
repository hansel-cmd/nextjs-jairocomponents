const PersonalInformationModal = () => {
    return ( 
        <div className="modal fade" id="personal_information_modal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header no-border-bottom justify-content-center py-4">
                        <h3 className="modal-title text-center fw-bold" id="modalLabel">Personal Information</h3>
                    </div>

                    <div className="modal-body pt-4">

                        <div className="container">
                            <form className="row g-3">
                                {/* First Name */}
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

                                {/* Country */}
                                <div className="col-md-6">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select id="country" className="form-select shadow-sm" role="button" aria-label="country">
                                        <option defaultValue>Select Country</option>
                                        <option value="x">Lorem, ipsum dolor.</option>
                                        <option value="y">Lorem, ipsum.</option>
                                        <option value="z">Lorem ipsum dolor sit.</option>
                                    </select>
                                </div>

                                {/* City */}
                                <div className="col-md-6">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input type="text" className="form-control" id="city" placeholder="Enter your city..." />
                                </div>
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
                                <button type="button" className="btn btn-info">Save</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PersonalInformationModal;