const SubInfoGroup = () => {
    return (
        <div className="row pb-4 px-2 mb-4">
            <div className="col-4 bg-primary px-4 p-3" style={{ borderTopLeftRadius: "1rem", borderBottomLeftRadius: "1rem" }}>
                <p className="text-white mb-0">Type</p>
                <p className="text-white fw-bold mb-0">Full Time</p>
            </div>
            <div className="col-4 bg-secondary px-4 p-3">
                <p className="text-white mb-0">Work Set-up</p>
                <p className="text-white fw-bold mb-0">Remote (Temporary)</p>
            </div>
            <div className="col-4 bg-info px-4 p-3" style={{ borderTopRightRadius: "1rem", borderBottomRightRadius: "1rem" }}>
                <p className="text-white mb-0">Salary</p>
                <p className="text-white fw-bold mb-0">P25,000 - P30,000</p>
            </div>
        </div>
    );
}

export default SubInfoGroup;