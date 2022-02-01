const CardDetails = () => {
    return (
        <div className="card rounded-5 mb-4 shadow border border-info">

            <div className="card-header no-border-bottom bg-transparent pt-4 px-4">
                <div className="row">
                    <div className="col-10 col-sm-6">
                        <h5 className="text-info">.NET Developer</h5>
                        <p className="fs-6">Jairosoft Inc.</p>
                    </div>
                    <div className="col-2 col-sm-6 d-flex justify-content-end align-items-start">
                        <button className="btn btn-info rounded-4"><i className="bi bi-messenger"></i></button>
                    </div>
                </div>
            </div>
            <div className="card-body px-4">


                {/* icons with label */}
                <div>
                    <div className="row">
                        <div className="col-md-6">
                            <p className="fs-7"><span className="pe-2"><i className="bi bi-gift"></i></span> Remote Temporary</p>
                        </div>
                        <div className="col-md-6">
                            <p className="fs-7"><span className="pe-2"><i className="bi bi-gift"></i></span> Davao or Cebu City, Philippines</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <p className="fs-7"><span className="pe-2"><i className="bi bi-gift"></i></span> Full Time / Part Time</p>
                        </div>
                        <div className="col-md-6">
                            <p className="fs-7"><span className="pe-2"><i className="bi bi-gift"></i></span> Information Technology and Services</p>
                        </div>
                    </div>
                </div>


                <div className="pb-3">
                    <h6>Position Description:</h6>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eius tempore ad debitis ipsa impedit omnis aliquam id. Architecto voluptate quidem, perferendis minus sint illum illo, dolor, harum voluptas veniam ratione totam exercitationem. Quos, nam. Iste ipsum velit voluptas distinctio...</p>
                </div>


                <div className="row mb-4">
                    <div className="col d-grid d-block">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">More Details</button>
                    </div>
                    <div className="col d-grid d-block">
                        <button type="button" className="btn btn-info">Apply Now</button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardDetails;