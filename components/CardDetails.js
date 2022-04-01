import { useRouter } from 'next/router'

const CardDetails = ({ details }) => {
    const router = useRouter()
    return (
        <>
            <div className="card rounded-5 mb-4 shadow bg-outline-secondary-opacity-10" style={{position: "sticky", top: "120px"}}>

                <div className="card-header no-border-bottom bg-transparent pt-4 pb-0 px-4">
                    <div className="row align-items-center">
                        <div className="col-10 col-sm-8">
                            <h5 className="text-dark mb-0">
                                <span className="navbar-brand">
                                    <img src="/logo2.png" alt="" width="64" height="64" />
                                </span>
                                Jairosoft Inc.
                            </h5>
                        </div>
                        <div className="col-2 col-sm-4 d-flex justify-content-end align-items-start">
                            <span className='fs-7 text-dark'>March 20, 2022</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 col-sm-8">
                            <h5 className="text-info fw-bold">{details.title}</h5>
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
                    {/* icons with label */}
                    <div className="row pb-4 px-2">
                        <div className="col-4 bg-primary ps-3 p-3" style={{ borderTopLeftRadius: "1rem", borderBottomLeftRadius: "1rem" }}>
                            <p className="text-white mb-0">Type</p>
                            <p className="text-white fw-bold mb-0">Full Time</p>
                        </div>
                        <div className="col-4 bg-secondary px-2 p-3">
                            <p className="text-white mb-0">Work Set-up</p>
                            <p className="text-white fw-bold mb-0">Remote (Temporary)</p>
                        </div>
                        <div className="col-4 bg-info px-2 p-3" style={{ borderTopRightRadius: "1rem", borderBottomRightRadius: "1rem" }}>
                            <p className="text-white mb-0">Salary</p>
                            <p className="text-white fw-bold mb-0">P25,000 - P30,000</p>
                        </div>
                    </div>


                    <div className="pb-3">
                        <h6 className="text-dark fw-bold text-uppercase">Position Description:</h6>
                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eius tempore ad debitis ipsa impedit omnis aliquam id. Architecto voluptate quidem, perferendis minus sint illum illo, dolor, harum voluptas veniam ratione totam exercitationem. Quos, nam. Iste ipsum velit voluptas distinctio...</p>
                    </div>


                    <div className="row mb-4">
                        <div className="col d-grid d-block">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => { router.push(`/view-job/${details.company.toLowerCase().replace(/ /g, "-")}/${details.title.toLowerCase().replace(/ /g, "-")}`) }}>More Details</button>
                        </div>
                        <div className="col d-grid d-block">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#apply_now_modal">Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardDetails;