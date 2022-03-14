const FollowModal = () => {
    return (
        <div className="modal fade" id="follow_modal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalLabel" aria-hidden="true">
            <div className="modal-dialog ">
                <div className="modal-content pt-4">

                    <div className="modal-body px-4 pt-0">

                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="container">

                            <div className="pb-1">
                                <p className="fw-bold lh-1 text-info">Follow Setting</p>

                                <p className="text-secondary">
                                    You are about to receive the following notifications from <span className="fw-bold text-dark">JAIROSOFT INC</span>.
                                </p>
                            </div>

                            <div className="py-2">

                                <div className="pb-3">
                                    <ol>
                                        <li className="fw-bold" style={{ "paddingLeft": "0rem" }}>Job Posts</li>
                                        <li className="fw-bold" style={{ "paddingLeft": "0rem" }}>Company Information updates</li>
                                    </ol>
                                </div>

                                {/* Follow button */}
                                <div className="row mb-2">
                                    <div className="col d-grid d-block">

                                        <button type="button" className="btn btn-dark">Follow <span></span><i className="bi bi-check2-square"></i></button>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
}

export default FollowModal;