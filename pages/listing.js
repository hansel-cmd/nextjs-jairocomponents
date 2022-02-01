import styles from '../styles/Listing.module.css'
import LongCard from '../components/LongCard'
import FilterModal from '../components/FilterModal'


const Listing = () => {
    return (
        <section className="text-dark px-lg-0 p-lg-0 pt-lg-5">

            <FilterModal></FilterModal>

            <div className="container px-0">

                <div className="row">

                    {/* list */}
                    <div className='col-lg-7 p-4'>

                        {/* Search and Button */}
                        <div className="row">
                            <div className="col mt-2">
                                <div className="input-group flex-nowrap">
                                    <input type="text" placeholder="Search jobs here..."
                                        className={`
                                        form-control shadow-sm
                                        ${styles['no-border-right']}
                                        ${styles['no-focus']}
                                    `} />

                                    <span className={`
                                        input-group-text
                                        ${styles['no-background']}
                                    `} id="addon-wrapping">
                                        <i className="bi bi-search"></i>
                                    </span>
                                </div>
                            </div>
                        </div>


                        {/* Sort By and Fiter Button */}
                        <div className="pt-2">

                            <div className="row">
                                {/* Sort By */}
                                <div className="col-lg-9 col-xl-10 mt-2">
                                    <div className="input-group flex-nowrap">

                                        <span className={`
                                    input-group-text
                                    ${styles['no-background']}
                                `} id="addon-wrapping">
                                            Sort By
                                        </span>

                                        <select id="sortBy" className="form-select shadow-sm" role="button" aria-label="sort-by">
                                            <option defaultValue>Default Value</option>
                                            <option value="x">Lorem, ipsum dolor.</option>
                                            <option value="y">Lorem, ipsum.</option>
                                            <option value="z">Lorem ipsum dolor sit.</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Filter Button */}
                                <div className="col-lg-3 col-xl-2 d-grid d-block mt-2">
                                    <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#modal">Filter <i className="bi bi-funnel-fill"></i></button>
                                </div>
                            </div>

                        </div>


                        <div className={styles['horizontal-separator']}></div>


                        <div className="pt-4">
                            { [1,2,3,4,5].map(() => <LongCard></LongCard>) }
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