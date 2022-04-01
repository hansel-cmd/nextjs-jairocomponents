import { useEffect, useState } from 'react'
import styles from '../styles/Listing.module.css'
import LongCard from '../components/LongCard'
import FilterModal from '../components/FilterModal'
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

    useEffect(() => {
        setJobs(jobDesc)
        setCurrJob(jobDesc[0])
    }, []);

    function detailsNavigation(company, job) {
        router.push(`/view-job/${company}/${job}`)
    }
    return (
        <section className="text-dark px-lg-0 p-lg-0 pt-lg-5">

            {/* banner */}
            <section className="container">

                <h1 className="text-center">Find your dream job</h1>

                <div className="row">

                    {/* Filter Button */}
                    <div className="col-lg-3 col-xl-2 d-grid d-block mt-2">
                        <button type="button" className="btn btn-info shadow-sm" data-bs-toggle="modal" data-bs-target="#modal">Filter <i className="bi bi-funnel-fill"></i></button>
                    </div>

                    <div className="col mt-2">
                        <div className="input-group flex-nowrap">
                            <input type="text" placeholder="Search jobs here..." className="form-control shadow-sm no-border-right' no-focus" />

                            <span className="input-group-text no-background" id="addon-wrapping">
                                <i className="bi bi-search"></i>
                            </span>
                        </div>
                    </div>

                    <div className="col-lg-3 col-xl-2 mt-2">
                        <select id="sortBy" className="form-select shadow-sm" role="button" aria-label="sort-by">
                            <option defaultValue>Default Value</option>
                            <option value="x">Lorem, ipsum dolor.</option>
                            <option value="y">Lorem, ipsum.</option>
                            <option value="z">Lorem ipsum dolor sit.</option>
                        </select>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
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
                    <div className="col">
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
                    <div className="col">
                        <div className="py-2">
                            <div className="d-flex justify-content-between pb-2">
                                <span className="no-background text-start fw-bold">
                                    Salary
                                </span>
                                <span>
                                    P18,500 - P20,000
                                </span>
                            </div>
                            <RangeSlider></RangeSlider>
                        </div>
                    </div>
                    <div className="col d-flex align-items-end">
                        <div className="py-2">
                            <button type="button" className="btn btn-info shadow-sm">Clear Filter</button>
                        </div>
                    </div>
                </div>



            </section>

            {/* job list */}
            <section className="container px-0 position-relative pt-4">
                <div className="row">
                    <div className="col-5">
                        <div className="pt-4">
                            {jobs.map((data, i) => <LongCard key={i} details={data} setJob={() => { setCurrJob(data) }} ></LongCard>)}
                        </div>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-6 pt-4">
                        <CardDetails details={currJob}></CardDetails>
                    </div>
                </div>

            </section>

            <FilterModal></FilterModal>

            <div className="container px-0">

                <div className="row">
                    {/* list */}
                    <div className='col-lg-7 p-4'>



                        <div className={styles['horizontal-separator']}></div>





                    </div>

                    {/* card */}
                    {/* <div className="col-lg-5 p-4">
                        <div style={{ width: '35%' }}>
                            <div style={{ width: 'inherit' }}>
                                <div className="position-fixed" style={{ width: 'inherit', maxWidth: '510px' }}>
                                    <CardDetails details={currJob}></CardDetails>
                                </div>
                            </div>
                        </div>
                    </div> */}


                </div>
            </div>


            {/* Apply Now Modal */}
            <ApplyModal></ApplyModal>
        </section>
    );
}

export default Listing;