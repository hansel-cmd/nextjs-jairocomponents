const LongCard = () => {
    return (
        <div className="card rounded-5 border-highlight-left">
            <div className="card-header no-border-bottom bg-transparent pt-4 px-4">
                <h5 className="text-info">.NET Developer</h5>
                <p className="fs-6">Jairosoft Inc.</p>
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default LongCard;