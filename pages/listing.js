import { useEffect, useState } from 'react'
import styles from '../styles/Listing.module.css'
import LongCard from '../components/LongCard'
import CardDetails from '../components/CardDetails'
import ApplyModal from '../components/ApplyModal'
import RangeSlider from '../components/RangeSlider'
import { mainFeaturedProduct as jobDesc, companyInformation as companyInfo } from './testData.js';
import { useRouter } from 'next/router'


const Listing = () => {
    const router = useRouter()
    // STATES //
    const [jobs, setJobs] = useState([])
    const [currJob, setCurrJob] = useState({})
    const [isFilterActive, setFilterActive] = useState(false)
    const toggleClass = () => setFilterActive(!isFilterActive)

    useEffect(() => {
        setJobs(jobDesc)
        setCurrJob(jobDesc[0])
    }, []);

    function detailsNavigation(company, job) {
        router.push(`/view-job/${company}/${job}`)
    }
    return (
        <section className="text-dark px-lg-0 p-lg-0 pt-lg-5 pb-lg-4">

            {/* banner */}
            <section className="container py-4 mt-4 pb-0 pb-lg-4">

                <h1 className="text-center py-4 fw-bold">Find your dream job</h1>

                {/* Filter, Search, SortBy */}
                <div className="row pb-4">

                    {/* Filter Button */}
                    <div className="col-lg-3 col-xl-2 d-grid d-block mt-2">
                        <button type="button" className="btn btn-primary shadow-sm" onClick={toggleClass}>Filter <i className="bi bi-funnel-fill"></i></button>
                    </div>

                    {/* Search Box */}
                    <div className="col mt-2">
                        <div className="input-group flex-nowrap">
                            <input type="text" placeholder="Search jobs here..." className="form-control shadow-sm no-border-right' no-focus" />

                            <span className="input-group-text no-background" id="addon-wrapping">
                                <i className="bi bi-search"></i>
                            </span>
                        </div>
                    </div>

                    {/* Sort By */}
                    <div className="col-lg-3 col-xl-2 mt-2">
                        <select id="latest" className="form-select shadow-sm" role="button" aria-label="latest">
                            <option defaultValue>Default Value</option>
                            <option value="x">Lorem, ipsum dolor.</option>
                            <option value="y">Lorem, ipsum.</option>
                            <option value="z">Lorem ipsum dolor sit.</option>
                        </select>
                    </div>
                </div>

                {/* Filter Options: Industry, Employment, Salary, Clear Filter */}
                {/* Toggle the class: [invisible, visible] when clicking the filter button from above. */}
                <div className={`row py-4 ${!isFilterActive ? 'invisible' : 'visible'} `} >

                    {/* Industry */}
                    <div className="col-6 col-sm-6 col-xl-4">
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

                    {/* Employment Type */}
                    <div className="col-6 col-sm-6 col-xl-3">
                        <div className="py-2">
                            <span className="no-background text-start fw-bold">
                                Employment Type
                            </span>

                            <select id="employment_type" className="form-select mt-2 shadow-sm" role="button" aria-label="employment_type">
                                <option defaultValue>Default</option>
                                <option value="x">Lorem, ipsum dolor.</option>
                                <option value="y">Lorem, ipsum.</option>
                                <option value="z">Lorem ipsum dolor sit.</option>
                            </select>
                        </div>
                    </div>

                    {/* Salary Range Selector */}
                    <div className="col-12 col-sm-6 col-xl-3">
                        <div className="py-2">
                            <div className="d-flex justify-content-between pb-2">
                                <span className="no-background text-start fw-bold">
                                    Salary
                                </span>
                                <span>
                                    P18,500 - P20,000
                                </span>
                            </div>
                            <div className="d-flex justify-content-center">
                                <RangeSlider></RangeSlider>
                            </div>
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

            {/* job list */}
            <section className="container px-0 position-relative pt-0 pt-md-4">
                <div className="row flex-row-reverse">
                    <div className="pt-4 col-md-6 col-lg-6">
                        <CardDetails details={currJob}></CardDetails>
                    </div>

                    <div className="col-1 col-xl-1 d-none d-xl-block"></div>

                    <div className="col-12 col-md-6 col-lg-6 col-xl-5">
                        <div className="py-4">
                            {jobs.map((data, i) => <LongCard key={i} details={data} setJob={() => { setCurrJob(data) }} ></LongCard>)}
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

            </section>


            {/* Apply Now Modal */}
            <ApplyModal></ApplyModal>
        </section>
    );
}

export default Listing;