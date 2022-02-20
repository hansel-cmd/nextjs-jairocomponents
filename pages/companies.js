import styles from '../styles/Listing.module.css'
import Link from 'next/link'

const Companies = () => {
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
                                                    <img src="logo.png" alt="" width="50" height="24" />
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
                        <div className="card rounded-5 mb-4 shadow border border-info">

                            <div className="card-header no-border-bottom bg-transparent pt-4 px-4">
                                <div className="row">
                                    <div className="col-10 col-sm-6">
                                        <h5 className="text-info">
                                            <span class="navbar-brand">
                                                <img src="logo.png" alt="" width="50" height="24" />
                                            </span>
                                            Company Name
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body px-4">

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
                                    <p className="text-secondary text-justify" style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eius tempore ad debitis ipsa impedit omnis aliquam id. Architecto voluptate quidem, perferendis minus sint illum illo, dolor, harum voluptas veniam ratione totam exercitationem. Quos, nam. Iste ipsum velit voluptas distinction. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet possimus minima sint eius quos iusto sed rem unde voluptates, pariatur fuga voluptatum provident itaque voluptate laborum in repellendus ab, voluptatibus quam magni quod! Consectetur dolore modi maxime, aspernatur ut cum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci eaque tenetur ab non tempore numquam quam dicta enim possimus dolor?</p>
                                </div>

                                <div className="pb-3">
                                    <h6>Job Position Available</h6>
                                    <p className="text-secondary">22</p>
                                </div>

                                <div className="row mb-4">
                                    <div className="col d-grid d-block">
                                        <Link href={`view-company-jobs/[indicate_company_name]`}>
                                            <button type="button" className="btn btn-info">View Company</button>
                                        </Link>
                                    </div>
                                    <div className="col d-grid d-block">
                                        <button type="button" className="btn btn-dark">Follow <span></span><i class="bi bi-check2-square"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}

export default Companies;