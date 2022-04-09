import SubInfoGroup from "../../components/SubInfoGroup";

const Company = () => {

    return (
        <section className="text-dark px-lg-0 p-lg-0 pt-lg-5 mb-4">

            {/* banner */}
            <section className="container py-4 mt-4 pb-0 pb-lg-4">

                <h1 className="text-center py-4 fw-bold">
                    {/* logo2.png is pixelated. Gi dl ra nako sa figma */}
                    <img src="/velvet.png" height="164" width="164" />
                </h1>

                {/* 3 Column Card */}
                <SubInfoGroup></SubInfoGroup>
            </section>


            {/* job list */}
            <section className="container px-0 position-relative pt-0 pt-md-4 pb-4">
                <div className="row flex-row-reverse">
                    <div className="col-12 col-md-12 col-lg-6 col-xl-7">

                        <h4 className="fw-bold">Location</h4>
                        <div className="py-4 mb-4">
                            <div className="bg-light d-flex align-items-center justify-content-center" style={{height: "500px", width: "100%"}}>
                                Map Container
                            </div>
                        </div>

                        <h4 className="fw-bold py-4">About the Company</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium sunt totam amet. Perspiciatis totam inventore incidunt eaque facilis minima repellat pariatur quas perferendis nobis, dolor, eos cum blanditiis quam accusamus doloribus modi assumenda nulla aperiam reiciendis nihil. Ad blanditiis perferendis, minima maxime rerum quo at sapiente recusandae provident? Eligendi iure maiores eum magni. Necessitatibus rem ut, commodi nulla ducimus adipisci ipsum. Voluptatum deleniti inventore, nostrum minus doloribus nisi quos explicabo in pariatur recusandae consequuntur beatae?</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem doloribus veritatis repellat deleniti commodi suscipit. Sequi, cupiditate? Asperiores ex sequi quidem cum corporis commodi? Modi ipsum, cupiditate eum ea labore nisi iste fugiat consectetur rerum odit nemo ad, eveniet dicta suscipit. Nemo quisquam reprehenderit temporibus tempora esse incidunt sed ratione voluptate non! Alias suscipit, dolorum corrupti ipsam amet eum nesciunt eius, blanditiis quaerat id pariatur esse mollitia eligendi dolor velit nobis qui non dolores. Ex molestiae quam doloribus voluptates placeat totam officia quasi illo necessitatibus laborum tempora optio odit, fugiat, velit porro ullam eum mollitia nemo sint temporibus. Eos tenetur consequatur autem?</p>
                    </div>

                    <div className="col-12 col-md-12 col-lg-6 col-xl-5 pe-0 pe-md-5">

                        <h4 className="fw-bold">Available Job Positions</h4>
                        <div className="py-4">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((data, i) => {
                                return (
                                    <div className="card rounded-5 bg-outline-primary-opacity-5 primary-hover mb-4 border-0 pt-4" role="button">
                                        <div className="card-body pt-0 px-4">
                                            <h5 className="text-dark fw-bold">Product Designer</h5>
                                            <div className="pb-2">
                                                <button className="badge bg-outline-primary-opacity-20 rounded-pill me-2">Full Time</button>
                                                <button className="badge bg-outline-info-opacity-20 rounded-pill me-2">Remote (Temp)</button>
                                            </div>
                                            <p className="text-dark">Davao City and Cebu City, Philippines</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </section>



        </section>
    );
}

export default Company;