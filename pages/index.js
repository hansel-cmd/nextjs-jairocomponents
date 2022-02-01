
export default function Home() {
  return (
    <>
      <section className="text-dark p-5 px-2 px-lg-0 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div className="container">
          <div className="row">
            
            {/* left */}
            <div className='col-lg-6'>
              <h1>Lorem ipsum dolor sit amet, <span className="text-warning"> consectetur adipisicing elit.</span></h1>
              <p className="lead my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eaque, itaque laborum assumenda autem id harum nobis blanditiis aspernatur modi eligendi dolorum repellat expedita cumque atque illum sit dolore fugit provident aperiam! Quia mollitia nobis libero assumenda excepturi maiores numquam.
              </p>

              {/* Search and Button */}
              <div className="row">
                <div className="col-sm-9 mt-2">
                  <div className="input-group flex-nowrap">
                    <input type="text" placeholder="Search jobs here..." className="form-control no-border-right"/>
                    <span className="input-group-text no-background" id="addon-wrapping">
                      <i className="bi bi-search"></i>
                    </span>
                  </div>

                </div>
                <div className="col-sm-3 mt-2 d-grid d-block">
                  <button type="button" className="btn btn-info px-6">Search</button>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="col-lg-6 pt-4 pt-lg-0 d-none d-md-block">
              <img className="img-fluid w-100" src="/showcase.svg" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
