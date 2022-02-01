const FilterModal = () => {
    return (
        <div className="modal fade" id="modal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header no-border-bottom justify-content-center">
                        <h5 className="modal-title" id="modalLabel">Filter Options</h5>
                    </div>
                    <div className="modal-body pt-0">

                        <div className="container">

                            <div className="py-2">

                                <span className="no-background text-start">
                                    Industry
                                </span>

                                <select id="industry" className="form-select mt-2" role="button" aria-label="industry">
                                    <option defaultValue disabled>Default</option>
                                    <option value="x">Lorem, ipsum dolor.</option>
                                    <option value="y">Lorem, ipsum.</option>
                                    <option value="z">Lorem ipsum dolor sit.</option>
                                </select>
                            </div>


                            <div className="py-2">

                                <span className="no-background text-start">
                                    Company
                                </span>

                                <select id="company" className="form-select mt-2" role="button" aria-label="company">
                                    <option defaultValue disabled>Default</option>
                                    <option value="x">Lorem, ipsum dolor.</option>
                                    <option value="y">Lorem, ipsum.</option>
                                    <option value="z">Lorem ipsum dolor sit.</option>
                                </select>
                            </div>


                            <div className="py-2">

                                <span className="no-background text-start">
                                    Employee Type
                                </span>

                                <select id="employeeType" className="form-select mt-2" role="button" aria-label="employee-type">
                                    <option defaultValue disabled>Default</option>
                                    <option value="x">Lorem, ipsum dolor.</option>
                                    <option value="y">Lorem, ipsum.</option>
                                    <option value="z">Lorem ipsum dolor sit.</option>
                                </select>
                            </div>

                        </div>


                    </div>
                    <div className="modal-footer no-border-top">
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

export default FilterModal;