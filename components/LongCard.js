const LongCard = ({ details, setJob }) => {
    return (
        <div className="card rounded-5 bg-outline-primary-opacity-5 primary-hover mb-4 shadow" role="button" onClick={setJob}>
            <div className="card-header no-border-bottom bg-transparent pt-4 px-4 pb-0">
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-between">
                        <h5 className="text-info">
                            <span className="navbar-brand">
                                <img src="/logo2.png" alt="" width="50" height="50" />
                            </span>

                        </h5>
                        <h5 className="text-info fw-bold">
                            P25,000 - P30,000
                        </h5>
                    </div>
                </div>
            </div>
            <div className="card-body pt-0 px-4">
                <p className="fs-7 mb-2 text-secondary fw-bold">{details.company}</p>
                <h5 className="text-dark fw-bold">{details.title}</h5>
                <div className="pb-2">
                    <button className="badge bg-outline-primary-opacity-20 rounded-pill me-2">Full Time</button>
                    <button className="badge bg-outline-info-opacity-20 rounded-pill me-2">Remote (Temp)</button>
                </div>
                <p className="text-dark">{details.companyLocation}</p>
                <p className="fs-7 text-secondary">March 20, 2022</p>
                <hr />
                <div className="row align-items-center">
                    <div className="col">
                        <button type="button" className="btn btn-primary px-4 rounded" data-bs-toggle="modal" data-bs-target="#apply_now_modal">Apply</button>
                    </div>
                    <div className="col-6">
                        <p className="fs-7 text-secondary text-end mb-0">9 replies</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LongCard;