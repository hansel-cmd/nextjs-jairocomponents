import { useEffect, useState } from 'react'
import CompanyCardDetails from "../components/CompanyCardDetails"

const Companies = () => {

    const [isFilterActive, setFilterActive] = useState(false)
    const toggleClass = () => setFilterActive(!isFilterActive)

    return (
        <section className="text-dark px-lg-0 p-lg-0 pt-lg-5">

            {/* banner */}
            <section className="container py-4 mt-4 pb-0">

                {/* Filter, Search, SortBy */}
                <div className="row pb-4">

                    {/* Filter Button */}
                    <div className="col-lg-3 col-xl-2 d-grid d-block mt-2">
                        <button type="button" className="btn btn-primary shadow-sm" onClick={toggleClass}>Filter <i className="bi bi-funnel-fill"></i></button>
                    </div>

                    {/* Search Box */}
                    <div className="col mt-2">
                        <div className="input-group flex-nowrap">
                            <input type="text" placeholder="Search companies here..." className="form-control shadow-sm no-border-right' no-focus" />

                            <span className="input-group-text no-background" id="addon-wrapping">
                                <i className="bi bi-search"></i>
                            </span>
                        </div>
                    </div>

                    {/* Frequency: Most Search, etc. */}
                    <div className="col-lg-3 col-xl-2 mt-2">
                        <select id="frequency" className="form-select shadow-sm" role="button" aria-label="latest">
                            <option defaultValue>Default Value</option>
                            <option value="x">Lorem, ipsum dolor.</option>
                            <option value="y">Lorem, ipsum.</option>
                            <option value="z">Lorem ipsum dolor sit.</option>
                        </select>
                    </div>
                </div>

                {/* Filter Options: Industry, Location, Clear Filter */}
                {/* Toggle the class: [invisible, visible] when clicking the filter button from above. */}
                <div className={`row py-4 ${!isFilterActive ? 'invisible' : 'visible'} `} >

                    {/* Industry */}
                    <div className="col-6 col-sm-6 col-xl-4 me-xl-4">
                        <div className="py-2">
                            <span className="no-background text-start fw-bold">
                                Industry
                            </span>

                            <select id="industry" className="form-select mt-2 shadow-sm" role="button" aria-label="industry">
                                <option defaultValue>Default</option>
                                <option value="x">Lorem, ipsum dolor.</option>
                                <option value="y">Lorem, ipsum.</option>
                                <option value="z">Lorem ipsum dolor sit.</option>
                            </select>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="col-6 col-sm-6 col-xl-3 me-xl-4">
                        <div className="py-2">
                            <span className="no-background text-start fw-bold">
                                Location
                            </span>

                            <select id="location" className="form-select mt-2 shadow-sm" role="button" aria-label="location">
                                <option defaultValue>Default</option>
                                <option value="x">Lorem, ipsum dolor.</option>
                                <option value="y">Lorem, ipsum.</option>
                                <option value="z">Lorem ipsum dolor sit.</option>
                            </select>
                        </div>
                    </div>


                    {/* Clear Filter */}
                    <div className="col-12 col-sm-6 col-xl-2 d-flex align-items-end">
                        <div className="py-2">
                            <button type="button" className="btn btn-secondary shadow-sm">Clear Filter</button>
                        </div>
                    </div>
                </div>

            </section>


            <div className="container px-0 pt-0 pt-lg-0 position-relative">

                <div className="row flex-row-reverse pb-4">

                    {/* Company Card Details */}
                    <div className="col-lg-6 col-xl-7 p-4">
                        <CompanyCardDetails></CompanyCardDetails>
                    </div>

                    {/* company list */}
                    <div className="col-lg-6 col-xl-5">
                        <div className="py-4">
                            {[1, 2, 3, 4, 5].map((data, i) => {
                                return (
                                    <div key={i} className="card rounded-5 bg-outline-primary-opacity-5 primary-hover mb-4 border-0" role="button">
                                        <div className="card-header no-border-bottom bg-transparent pt-4 px-4 pb-2">
                                            <div className="row">
                                                <div className="col-12 d-flex align-items-center justify-content-between">
                                                    <h5 className="text-dark fw-bold">
                                                        <span className="navbar-brand">
                                                            <img src="/logo2.png" alt="" width="50" height="50" />
                                                        </span>
                                                        Jairosoft Inc.
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body pt-0 px-4 pb-4">
                                            <p className="text-dark fs-5">Davao and Cebu City, Philippines</p>
                                            <p className="fs-7 text-secondary mb-0 pt-2">8 Available Job Positions</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Pagination */}
                        <div className="row pt-4">
                            <nav className="d-flex justify-content-center">
                                <ul className="pagination">
                                    <li className="page-item disabled text-primary me-2">
                                        <a className="page-link">
                                            <i className="bi bi-caret-left-fill"></i>
                                        </a>
                                    </li>
                                    <li className="page-item me-2">
                                        <a className="page-link">1</a>
                                    </li>
                                    <li className="page-item active me-2" aria-current="page">
                                        <a className="page-link">2</a>
                                    </li>
                                    <li className="page-item me-2">
                                        <a className="page-link">3</a>
                                    </li>
                                    <li className="page-item me-2">
                                        <a className="page-link text-primary">
                                            <i className="bi bi-caret-right-fill"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Companies;