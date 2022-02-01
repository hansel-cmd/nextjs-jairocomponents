const LongCard = () => {
    return (
        <div className="card rounded-5 border-highlight-left mb-4 shadow" role="button">
            <div className="card-header no-border-bottom bg-transparent pt-4 px-4">
                <h5 className="text-info">.NET Developer</h5>
                <p className="fs-6">Jairosoft Inc.</p>
            </div>
            <div className="card-body">

                <div className="row">
                    <div className="col-md-6">
                        <p><span className="pe-2"><i className="bi bi-gift"></i></span> Remote Temporary</p>
                    </div>
                    <div className="col-md-6">
                        <p><span className="pe-2"><i className="bi bi-gift"></i></span> Davao or Cebu City, Philippines</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p><span className="pe-2"><i className="bi bi-gift"></i></span> Full Time / Part Time</p>
                    </div>
                    <div className="col-md-6">
                        <p><span className="pe-2"><i className="bi bi-gift"></i></span> Information Technology and Services</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LongCard;