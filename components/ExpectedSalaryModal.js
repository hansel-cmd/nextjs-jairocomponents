const ExpectedSalaryModal = () => {
    return (
        <div className="modal fade" id="expected_salary_modal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">

                    <div className="modal-header no-border-bottom justify-content-center py-4">
                        <h3 className="modal-title text-center fw-bold" id="modalLabel">Expected Salary</h3>
                    </div>

                    <div className="modal-body pt-0">

                        <div className="container">
                            <form className="row g-3">
                                {/* Range From */}
                                <div className="col-md-6">
                                    <label htmlFor="range_from" className="form-label">Range From</label>
                                    <input type="text" className="form-control" id="range_from" placeholder="Enter amount..." />
                                </div>

                                {/* Range To */}
                                <div className="col-md-6">
                                    <label htmlFor="range_to" className="form-label">To</label>
                                    <input type="text" className="form-control" id="range_to" placeholder="Enter amount..." />
                                </div>


                                {/* Position */}
                                <div className="col-md-6">
                                    <label htmlFor="position" className="form-label">Position</label>
                                    <input type="text" className="form-control" id="position" placeholder="Enter your work position..." />
                                </div>

                                {/* Salary Type */}
                                <div className="col-md-6">
                                <label htmlFor="salary_type" className="form-label">Salary Type</label>
                                    <select id="salary_type" className="form-select shadow-sm" role="button" aria-label="salary_type">
                                        <option defaultValue>Select Salary Type</option>
                                        <option value="x">Lorem, ipsum dolor.</option>
                                        <option value="y">Lorem, ipsum.</option>
                                        <option value="z">Lorem ipsum dolor sit.</option>
                                    </select>
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

export default ExpectedSalaryModal;