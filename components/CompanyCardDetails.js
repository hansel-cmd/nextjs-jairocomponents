import FollowModal from './FollowModal';
import Link from 'next/link'

const CompanyCardDetails = () => {
    return (
        <div className="card rounded-5 mb-4 bg-outline-secondary-opacity-10 border-0 px-2" style={{ position: "sticky", top: "120px" }}>

            <div className="card-header no-border-bottom bg-transparent pt-4 pb-0 px-4">
                <div className="row align-items-center">
                    <div className="col-10 col-sm-8">
                        <h5 className="text-dark mb-0 d-flex align-items-center">
                            <span className="navbar-brand">
                                {/* Change logo w/ high reso */}
                                <img src="/logo2.png" alt="" width="94" height="94" />
                            </span>
                            <div>
                                <span className="fs-4">Jairosoft Inc.</span>
                                <p className="fs-6 fw-normal pb-0 pt-1 mb-0">Davao City and Cebu City, Philippines</p>
                            </div>
                        </h5>
                    </div>
                    <div className="col-2 col-sm-4 d-flex justify-content-end align-items-start">
                        <button type="button" className="btn btn-primary rounded-4 py-2 px-3">View More</button>
                    </div>
                </div>
            </div>

            <div className="card-body px-4">

                <div className="row">

                    {/* Description */}
                    <div className="pb-3">
                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eius tempore ad debitis ipsa impedit omnis aliquam id. Architecto voluptate quidem, perferendis minus sint illum illo, dolor, harum voluptas veniam ratione totam exercitationem. Quos, nam. Iste ipsum velit voluptas distinction. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, numquam dolores!</p>
                        <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eius tempore ad debitis ipsa impedit omnis aliquam id. Architecto voluptate quidem, perferendis minus sint illum illo, dolor, harum voluptas veniam ratione totam exercitationem. Quos, nam. Iste ipsum velit voluptas distinction. Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, numquam dolores!</p>
                    </div>

                </div>
                
                <h6 className="text-dark fw-bold pb-4">Available Job Positions</h6>
                
                {/* Positions */}
                <div className="row px-2">

                    {/* Position 1 */}
                    <div className="col ps-0">
                        <div className="card rounded-5 mb-4 border-0">
                            <div className="card-header no-border-bottom bg-transparent pt-3 pb-0">
                                <div className="row">
                                    <div className="col-12 d-flex align-items-center justify-content-between">
                                        <p className="text-dark fw-bold pb-0 mb-2">
                                            Product Designer
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div className="pb-2">
                                    <button className="badge bg-outline-primary-opacity-20 rounded-pill me-2" style={{ fontSize: '0.6875rem' }}>Full Time</button>
                                    <button className="badge bg-outline-info-opacity-20 rounded-pill me-2" style={{ fontSize: '0.6875rem' }}>Remote (Temp)</button>
                                </div>
                                <p className="text-dark">Davao City and Cebu City, Philippines</p>
                            </div>
                        </div>
                    </div>

                    {/* Position 2 */}
                    <div className="col px-1">
                        <div className="card rounded-5 mb-4 border-0">
                            <div className="card-header no-border-bottom bg-transparent pt-3 pb-0">
                                <div className="row">
                                    <div className="col-12 d-flex align-items-center justify-content-between">
                                        <p className="text-dark fw-bold pb-0 mb-2">
                                            Product Designer
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div className="pb-2">
                                    <button className="badge bg-outline-primary-opacity-20 rounded-pill me-2" style={{ fontSize: '0.6875rem' }}>Full Time</button>
                                    <button className="badge bg-outline-info-opacity-20 rounded-pill me-2" style={{ fontSize: '0.6875rem' }}>Remote (Temp)</button>
                                </div>
                                <p className="text-dark">Davao City and Cebu City, Philippines</p>
                            </div>
                        </div>
                    </div>

                    {/* Position 3 */}
                    <div className="col pe-0">
                        <div className="card rounded-5 mb-4 border-0">
                            <div className="card-header no-border-bottom bg-transparent pt-3 pb-0">
                                <div className="row">
                                    <div className="col-12 d-flex align-items-center justify-content-between">
                                        <p className="text-dark fw-bold pb-0 mb-2">
                                            Product Designer
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div className="pb-2">
                                    <button className="badge bg-outline-primary-opacity-20 rounded-pill me-2" style={{ fontSize: '0.6875rem' }}>Full Time</button>
                                    <button className="badge bg-outline-info-opacity-20 rounded-pill me-2" style={{ fontSize: '0.6875rem' }}>Remote (Temp)</button>
                                </div>
                                <p className="text-dark">Davao City and Cebu City, Philippines</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyCardDetails;