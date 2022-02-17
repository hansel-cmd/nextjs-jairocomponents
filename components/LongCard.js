const LongCard = ({details,setJob}) => {
    return (
        <div className="card rounded-5 border-highlight-left mb-4 shadow" role="button" onClick={setJob}>
            <div className="card-header no-border-bottom bg-transparent pt-4 px-4">
                <h5 className="text-info">{details.title}</h5>
                <p className="fs-6">{details.company}</p>
            </div>
            <div className="card-body">

                <div className="row">
                    <div className="col-md-6">
                        <p><span className="pe-2"><i className="bi bi-gift"></i></span>{details.workLocation}</p>
                    </div>
                    <div className="col-md-6">
                        <p><span className="pe-2"><i className="bi bi-gift"></i></span>{details.companyLocation}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p><span className="pe-2"><i className="bi bi-gift"></i></span>{details.companyLocation}</p>
                    </div>
                    <div className="col-md-6">
                        <p><span className="pe-2"><i className="bi bi-gift"></i></span>{details.industry}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LongCard;