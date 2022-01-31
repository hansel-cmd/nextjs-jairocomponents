import styles from '../styles/Home.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


export default function Home() {
  return (
    <>
      <section class="text-dark p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div class="container">
          <div class="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>Lorem ipsum dolor sit amet, <span class="text-warning"> consectetur adipisicing elit.</span></h1>
              <p class="lead my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eaque, itaque laborum assumenda autem id harum nobis blanditiis aspernatur modi eligendi dolorum repellat expedita cumque atque illum sit dolore fugit provident aperiam! Quia mollitia nobis libero assumenda excepturi maiores numquam.
              </p>

              <div className="row">
                <div className="col-9">
                  <div class="input-group flex-nowrap">
                    <input type="text" placeholder="Search jobs here..." 
                      class={`
                      form-control
                      ${styles['no-border-right']}
                    `}/>
                    <span class={`
                      input-group-text
                      ${styles['no-background']}
                    `} id="addon-wrapping">
                      <i class="bi bi-search"></i>
                    </span>
                  </div>

                </div>
                <div className="col-3 justify-content-center">
                  <button type="button" class="btn btn-info px-6">Search</button>
                </div>
              </div>
            </div>
            <img class="img-fluid w-50 d-none d-sm-block" src="/showcase.svg" />
          </div>
        </div>
      </section>
    </>
  )
}
