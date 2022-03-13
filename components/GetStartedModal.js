import { useRef, useEffect } from "react"
import Link from 'next/link'

const GetStartedModal = () => {

    let get_started_modal = useRef(null)
    useEffect(() => {
        setTimeout(() => {
            get_started_modal.current.classList.add("show")
            get_started_modal.current.classList.add("d-block")
            get_started_modal.current.classList.add("custom-opacity")
        }, 1000);
    })

    function closeGetStartedModal() {
        get_started_modal.current.classList.remove("show")
        get_started_modal.current.classList.remove("d-block")
        get_started_modal.current.classList.remove("custom-opacity")
    }

    return (
        <div ref={get_started_modal} className="modal fade" id="get_started_modal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="modalLabel" aria-modal="true">
            <div className="modal-dialog ">
                <div className="modal-content pt-4">

                    <div className="modal-body px-4 pt-0">

                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => closeGetStartedModal()}></button>
                        </div>
                        <div className="container">

                            <div className="pb-1">
                                <p className=" lh-1"><span className="text-info fw-bold">Hi, Velvet Crowe!</span> Welcome to JairoJobs.</p>

                                <p className="text-secondary">
                                    Let's get you started!
                                </p>

                                <p className="text-secondary">
                                    Important Reminder: You need to complete these information when applying for Jobs.
                                </p>
                            </div>

                            <div className="py-2">

                                <div className="pb-3">
                                    <p className="fw-bold mb-0">
                                        <span className="ps-2 pe-3 text-danger fw-bold">
                                            <i className="bi bi-x"></i>
                                        </span>
                                        1. Upload a Photo
                                    </p>
                                    <p className="fw-bold mb-0">
                                        <span className="ps-2 pe-3 text-success fw-bold">
                                            <i className="bi bi-check"></i>
                                        </span>
                                        2. Fill your Personal Information
                                    </p>
                                    <p className="fw-bold mb-0">
                                        <span className="ps-2 pe-3 text-success fw-bold">
                                            <i className="bi bi-check"></i>
                                        </span>
                                        3. Upload your Resume
                                    </p>
                                    <p className="fw-bold">
                                        <span className="ps-2 pe-3 text-danger fw-bold">
                                            <i className="bi bi-x"></i>
                                        </span>
                                        4. Add your expected Salary
                                    </p>
                                </div>

                                {/* Follow button */}
                                <div className="row mb-2">
                                    <div className="col d-grid d-block" onClick={() => closeGetStartedModal()}>
                                        <Link href="/my-profile" >
                                            <button type="button" className="btn btn-info">Go to My Profile</button>
                                        </Link>
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

export default GetStartedModal;