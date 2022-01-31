import styles from '../styles/Listing.module.css'

const Listing = () => {
    return (
        <section className="text-dark p-5 px-2 px-lg-0 p-lg-0 pt-lg-5 text-center text-sm-start">
            <div className="container">



                <div className="row">

                    {/* list */}
                    <div className='col-lg-7 p-4'>

                        {/* Search and Button */}
                        <div className="row">
                            <div className="col mt-2">
                                <div className="input-group flex-nowrap">
                                    <input type="text" placeholder="Search jobs here..."
                                        className={`
                                        form-control
                                        ${styles['no-border-right']}
                                        ${styles['no-focus']}
                                    `} />
                                    
                                    <span className={`
                                        input-group-text
                                        ${styles['no-background']}
                                    `} id="addon-wrapping">
                                        <i className="bi bi-search"></i>
                                    </span>

                                    <button type="button" className="btn btn-info">Filter <i className="bi bi-funnel-fill"></i></button>
                                </div>
                            </div>
                        </div>




                    </div>


                    {/* card */}
                    <div className="col-lg-5 p-4">
                        <div className="card text-white bg-primary mb-3" >
                            <div className="card-header">Header</div>
                            <div className="card-body">
                                <h5 className="card-title">Primary card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Listing;