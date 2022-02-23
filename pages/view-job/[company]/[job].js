import CompanyCardDetails from "../../../components/CompanyCardDetails"
import ApplyModal from "../../../components/ApplyModal"

const JobPage = () => {
    return (
        <section className="text-dark px-lg-0 p-lg-0 pt-lg-5">

            <div className="container px-0 pt-5 pt-lg-0">

                {/* Banner */}
                <div className="row">
                    <div className="col px-4">

                        {/* Job Name and Apply Button */}
                        <div className="card rounded-5 border-highlight-left mb-4 shadow" >
                            <div className="card-header no-border-bottom bg-transparent py-3 px-4">
                                <div className="row p-2 align-items-center">
                                    <div className="col-md-8 col-lg-10 d-flex flex-wrap align-items-center pb-3 pb-md-0">
                                        <h3 className="text-dark mb-0 fw-bold">
                                            .NET Developer
                                        </h3>
                                    </div>
                                    <div className="col-md-4 col-lg-2">
                                        <button type="button" className="btn btn-info rounded-4 w-100 p-2" data-bs-toggle="modal" data-bs-target="#apply_now_modal">Apply Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Content */}
                <div className="row pb-4">

                    {/* left: Description */}
                    <div className='col-lg-8 px-4'>

                        {/* Company Details */}
                        <div className="pt-0">

                            <div className="px-md-2 pt-4">

                                {/* Icons and details */}
                                <div className="pb-4">
                                    <p className="mb-0">
                                        <span className="pe-2">
                                            <i className="bi bi-gift"></i>
                                        </span>
                                        <span className="fw-bold">30 </span>
                                        Applied
                                    </p>
                                    <p className="mb-0">
                                        <span className="pe-2">
                                            <i className="bi bi-gift"></i>
                                        </span>
                                        Remote (Temporary)
                                    </p>
                                    <p className="mb-0">
                                        <span className="pe-2">
                                            <i className="bi bi-gift"></i>
                                        </span>
                                        Full Time
                                    </p>
                                    <p className="mb-0">
                                        <span className="pe-2">
                                            <i className="bi bi-gift"></i>
                                        </span>
                                        Davao or Cebu City, Philippines
                                    </p>
                                </div>


                                {/* Description */}
                                <div className="py-3">
                                    <h6>Position Description:</h6>
                                    <p className="text-secondary text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, rem sed quam dolorem ab laborum blanditiis cum delectus iusto explicabo, magnam voluptatibus? Enim cum facere dolore, eaque reiciendis, adipisci repellat repellendus beatae sequi suscipit rem voluptas at eum accusamus quasi tempora doloremque laborum veniam distinctio soluta ipsum nulla dolores? Totam.</p>
                                </div>

                                {/* Bullets */}
                                <div className="pb-3">
                                    <h6>Job Duties & Responsibilities:</h6>
                                    <ul className="text-secondary">
                                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium optio nesciunt vero quas dignissimos saepe odit, nam odio distinctio animi.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eos cum voluptatem omnis? Quos, aspernatur!</li>
                                        <li>Lorem ipsum dolor sit.</li>
                                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                                    </ul>
                                </div>

                                {/* Bullets */}
                                <div className="pb-3">
                                    <h6>Skills:</h6>
                                    <ul className="text-secondary">
                                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium optio nesciunt vero quas dignissimos saepe odit, nam odio distinctio animi.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eos cum voluptatem omnis? Quos, aspernatur!</li>
                                        <li>Lorem ipsum dolor sit.</li>
                                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                                    </ul>
                                </div>

                                {/* Bullets */}
                                <div className="pb-3">
                                    <h6>Qualitifactions and Related Experience:</h6>
                                    <ul className="text-secondary">
                                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium optio nesciunt vero quas dignissimos saepe odit, nam odio distinctio animi.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eos cum voluptatem omnis? Quos, aspernatur!</li>
                                        <li>Lorem ipsum dolor sit.</li>
                                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                                    </ul>
                                </div>

                                {/* Bullets */}
                                <div className="pb-3">
                                    <h6>ASP.NET, VB.NET, C#:</h6>
                                    <ul className="text-secondary">
                                        <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium optio nesciunt vero quas dignissimos saepe odit, nam odio distinctio animi.</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eos cum voluptatem omnis? Quos, aspernatur!</li>
                                        <li>Lorem ipsum dolor sit.</li>
                                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                                    </ul>
                                </div>

                                <button type="button" className="btn btn-info rounded-4 px-4" data-bs-toggle="modal" data-bs-target="#apply_now_modal">Apply Now</button>

                            </div>
                        </div>
                    </div>

                    {/* right: Cards */}
                    <div className="col-lg-4 p-4">

                        <div className="card rounded-5 mb-4 shadow border border-info">
                            <img src="/test.jpg" class="card-img-top rounded-5" />
                        </div>

                        <CompanyCardDetails></CompanyCardDetails>
                    </div>

                </div>
                
                
                {/* Apply Modal */}
                <ApplyModal></ApplyModal>
            </div>
        </section>
    );
}

export default JobPage;