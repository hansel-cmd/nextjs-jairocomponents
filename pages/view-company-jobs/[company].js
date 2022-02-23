const Company = () => {

    return (
        <section className="text-dark px-lg-0 p-lg-0 pt-lg-5">

            <div className="container px-0 pt-5 pt-lg-0">

                <div className="row">
                    <div className='col-lg-8 p-4'>

                        {/* Company Details */}
                        <div className="pt-0">

                            {/* Company Logo, Name, Follow BUtton */}
                            <div className="card rounded-5 border-highlight-left mb-4 shadow" >
                                <div className="card-header no-border-bottom bg-transparent py-2 px-4">
                                    <div className="row p-2 align-items-center">
                                        <div className="col-md-9 d-flex flex-wrap align-items-center">
                                            <span class="navbar-brand">
                                                <img src="/logo.png" alt="" width="90" height="90" />
                                            </span>
                                            <h3 className="text-info text-uppercase mb-0">
                                                JAIROSOFT INC.
                                            </h3>
                                        </div>
                                        <div className="col-md-3 ">
                                            <button type="button" className="btn btn-dark rounded-4 w-100 p-2">Follow <span></span><i class="bi bi-check2-square"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="px-md-2 pt-4">
                                <div className="pb-3">
                                    <h6>Headquarters</h6>
                                    <p className="text-secondary">Holy Trinity Avenue, Holy Trinity Village, Cabantian Davao city</p>
                                </div>

                                <div className="pb-3">
                                    <h6>Employees</h6>
                                    <p className="text-secondary">50+ Employees</p>
                                </div>

                                <div className="pb-3">
                                    <h6>Industry</h6>
                                    <p className="text-secondary">Information Technology and Services</p>
                                </div>

                                <div className="pb-3">
                                    <h6>About</h6>
                                    <p className="text-secondary text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eius tempore ad debitis ipsa impedit omnis aliquam id. Architecto voluptate quidem, perferendis minus sint illum illo, dolor, harum voluptas veniam ratione totam exercitationem. Quos, nam. Iste ipsum velit voluptas distinction. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet possimus minima sint eius quos iusto sed rem unde voluptates, pariatur fuga voluptatum provident itaque voluptate laborum in repellendus ab, voluptatibus quam magni quod! Consectetur dolore modi maxime, aspernatur ut cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci eaque tenetur ab non tempore numquam quam dicta enim possimus dolor?</p>
                                </div>

                                <div className="pb-3">
                                    <h6>Job Position Available</h6>
                                    <p className="text-secondary">22</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* List of Jobs Available */}
                    <div className="col-lg-4 p-4">
                        <h4 className="fw-bold pb-4"><span className="text-info">Jobs</span> Available</h4>

                        {[1, 2, 3, 4].map(() => {
                            return (
                                <div className="card rounded-5  mb-4 shadow border border-info" role="button" >
                                    <div className="card-header no-border-bottom bg-transparent pt-4 px-4">
                                        <h6 className="text-info fw-bold">UI/UX Designer</h6>
                                    </div>
                                    <div className="card-body pt-1">

                                        <div className="d-flex flex-wrap">

                                            <div className="pe-4">
                                                <p className="mb-1"><span className="pe-2"><i className="bi bi-gift"></i></span>Remote (Temporary)</p>
                                            </div>
                                            <div className="pe-4">
                                                <p className="mb-1"><span className="pe-2"><i className="bi bi-gift"></i></span>Full Time</p>
                                            </div>
                                            <div className="pe-4">
                                                <p className="mb-1"><span className="pe-2"><i className="bi bi-gift"></i></span>Davao or Cebu City, Philippines</p>
                                            </div>
                                            <div className="pe-4">
                                                <p className="mb-1"><span className="pe-2"><i className="bi bi-gift"></i></span> <span className="fw-bold">11</span> Applied</p>
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