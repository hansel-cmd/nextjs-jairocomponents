import CompanyCardDetails from "../components/CompanyCardDetails"

const Companies = () => {
    return (
        <section className="text-dark px-lg-0 p-lg-0 pt-lg-5">

            <div className="container px-0 pt-5 pt-lg-0">

                <div className="row">
                    {/* list */}
                    <div className='col-lg-7 p-4'>

                        {/* Company list */}
                        <div className="pt-0">
                            {[1, 2, 3, 4, 5].map((i) => {
                                return (
                                    <div className="card rounded-5 border-highlight-left mb-4 shadow" role="button" key={i}>
                                        <div className="card-header no-border-bottom bg-transparent pt-4 px-4">
                                            <h5 className="text-info">
                                                <span className="navbar-brand">
                                                    <img src="/logo.png" alt="" width="50" height="24" />
                                                </span>
                                                Company Name
                                            </h5>
                                        </div>
                                        <div className="card-body">

                                            <div className="row">
                                                <div className="col-md-8 pe-0">
                                                    <p><span className="pe-2"><i className="bi bi-geo-alt"></i></span>Holy Trinity Avenue, Holy Trinity Village, Cabantian Davao city</p>
                                                </div>
                                                <div className="col-md-4">
                                                    <p><span className="fw-bold">22</span> Available Positions</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Company Card Details */}
                    <div className="col-lg-5 p-4">
                        <CompanyCardDetails></CompanyCardDetails>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Companies;