import LongCard from "../../components/LongCard"

const Company = () => {

    return (
        <section className="text-dark px-lg-0 p-lg-0 pt-lg-5">

            <div className="container px-0">

                <div className="row">
                    {/* list */}
                    <div className='col-lg-7 p-4'>

                        {/* Company list */}
                        <div className="pt-0">
                            {[1, 2, 3, 4, 5].map(() => {
                                return (
                                    <div className="card rounded-5 border-highlight-left mb-4 shadow" role="button">
                                        <div className="card-header no-border-bottom bg-transparent pt-4 px-4">
                                            <h5 className="text-info">
                                                <span class="navbar-brand">
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
                        <h6>Jobs Available</h6>

                        {[1, 2, 3, 4].map(() => {
                            return (
                                <div className="card rounded-5  mb-4 shadow border border-info" role="button" >
                                    <div className="card-header no-border-bottom bg-transparent pt-4 px-4">
                                        <h6 className="text-info fw-bold">UI/UX Designer</h6>
                                    </div>
                                    <div className="card-body pt-1">

                                        <div className="d-flex flex-wrap">

                                            <div className="pe-4">
                                                <p><span className="pe-2"><i className="bi bi-gift"></i></span>Remote (Temporary)</p>
                                            </div>
                                            <div className="pe-4">
                                                <p><span className="pe-2"><i className="bi bi-gift"></i></span>Full Time</p>
                                            </div>
                                            <div className="pe-4">
                                                <p><span className="pe-2"><i className="bi bi-gift"></i></span>Davao or Cebu City, Philippines</p>
                                            </div>
                                            <div className="pe-4">
                                                <p><span className="pe-2"><i className="bi bi-gift"></i></span> <span className="fw-bold">11</span> applied</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}



                    </div>


                </div>
            </div>
        </section>
    );
}

export default Company;