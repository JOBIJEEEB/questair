import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import './our_company.css'

const OurCompany = () => {
  return (
    <>  
    <Navbar />   
      <div className="hero">
        <div className="first container text-center pt-5 py-3 px-md-2">
            <div className="who-box m-md-5 m-1">
                <h2 className="who fade-in-down p-3">WHO WE ARE</h2>
                <h6 className="wh-text fade-in pt-3 d-none d-md-block">
                    Quest-Air Technology Phils, Inc. (QAT) is dynamic & progressive construction company whose core competencies are in Mechanical Airconditioning & Ventilation, Electrical
                    Distribution & Ancillaries, Fire Protection Systems & Plumbing Works. We are an acknowledged leader in Cleanroom Design and Construction.
                </h6>
            </div>
        </div>
      </div>

      {/* VISION, MISSION, and CORE VALUES*/}
      <div className="second container-fluid pt-md-5 px-md-2 bg-white">
        <p className="wh-text2 fade-in m-3 pt- d-block d-md-none">
            Quest-Air Technology Phils, Inc. (QAT) is dynamic & progressive construction company whose core competencies are in Mechanical Airconditioning & Ventilation, Electrical
            Distribution & Ancillaries, Fire Protection Systems & Plumbing Works. We are an acknowledged leader in Cleanroom Design and Construction.
        </p>

        {/* VISION */}
        <div className="row justify-content-center mb-md-5">
          <div className="col-md-7">
            <div className="vs row px-md-3 px-2 py-md-3 py-2">

              <div className="col-2 justify-content-center d-flex align-items-center">
                <img src="./bulb.png" alt="Bulb" className="object-fit-contain img-fluid"/>
              </div>

              <div className="col-10 bg-white d-flex align-items-center">
                <div className="vs-texts px-md-4 px-0 pt-1 text-start">
                  <h1 className='title-vs fw-bolder'>OUR VISION</h1>
                  <h4 className='subtexts-vms fw-bold text-justify'>
                      WE BELIEVE IN WORKING TOGETHER TO ACHIEVE SUSTAINABLE AND RELIABLE DEVELOPMENTS BY YEAR
                      2027 FOR THE CONSTRUCTION INDUSTRY ENSURING CORPORATE SOCIAL RESPONSIBILITY.
                  </h4>
                </div>
              </div> 

            </div>
          </div>
        </div>

        {/* MISSION */}
        <div className="row justify-content-center mb-md-5">
          <div className="col-md-7">
            <div className="ms row px-md-3 px-2 vs py-md-3 py-2">
              <div className="col-10 bg-white d-flex align-items-center">
                  <div className="vs-texts px-md-4 px-0 pt-md-2 pt-1 text-start">
                    <h1 className='title-vs fw-bolder'>OUR MISSION</h1>
                    <h4 className='subtexts-vms fw-bold text-justify pb-md-2'>
                        WE SHALL BE A PROFESSIONAL ENGINEERING AND CONSTRUCTION COMPANY WHO VALUE THE TRUST AND
                        CONFIDENCE OF OUR CUSTOMERS. WE COMMIT OURSELVES TO DELIVER OUR PRODUCTS AND SERVICES
                        SAFELY, ON-TIME AND WITH HIGH QUALITY. WE WILL ASSURE TO PROVIDE A FAIR RETURN TO OUR
                        STOCKHOLDERS.
                    </h4>
                  </div>
              </div> 

              <div className="col-2 justify-content-center d-flex align-items-center">
                <img src="./gear.png" alt="Bulb" className="object-fit-contain img-fluid"/>
              </div>
            </div>
          </div>
        </div>

      {/* CORE VALUES */}
        <div className="row justify-content-center">
          <div className="core-values col-md-7 mb-md-3 gx-md-5 gx-0 ">
              <div className="line1 row g-md-3 text-center align-items-md-start align-items-start">
                <h1 className="main-title pt-2">
                  CORE VALUES
                </h1>
                <div className="col-12 col-md-4">
                  <div className="core-values-box">
                      <div className="texts py-md-4 py-0">
                          <h5 className="title">QUALITY</h5>
                          <p className="subtexts">We are committed to excellence in everything we do and how to achieve it.</p>
                      </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="core-values-box">
                    <div className="texts py-md-4 py-0">
                      <h5 className="title">ACCOUNTABILITY</h5>
                      <p className="subtexts">We assume <br /> responsibility of our actions <br />and decisions.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="core-values-box">
                    <div className="texts py-md-4 py-0">
                      <h5 className="title">OWNERSHIP</h5>
                      <p className="subtexts">We take care of our company and our customers as they were one's own.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="line2 row g-md-3 pt-md-3 justify-content-center">
                <div className="col-12 col-md-4">
                  <div className="core-values-box">
                    <div className="texts py-md-4 py-0">
                      <h5 className="title">EMPOWERMENT</h5>
                      <p className="subtexts">We encourage employees to take initiative, lead and decide.</p>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                  <div className="core-values-box">
                    <div className="texts py-md-4 py-0">
                      <h5 className="title">TEAMWORK</h5>
                      <p className="subtexts">We believe in working together to achieve a common goal.</p>
                    </div>
                  </div>
                </div>
                
                <div className="col-12 col-md-4">
                  <div className="core-values-box">
                    <div className="texts py-md-4 py-0">
                      <h5 className="title">COMMITMENT</h5>
                      <p className="subtexts">We strive hard to deliver our promises.</p>
                    </div>
                  </div>
                </div>
              </div>
                
              <div className="line3 row g-md-3 pt-md-3 pb-md-4 pb-3 justify-content-center">
                <div className="col-12 col-md-4">
                  <div className="core-values-box">
                      <div className="texts py-md-4 py-0">
                          <h5 className="title">SAFETY</h5>
                          <p className="subtexts">We ensure the health and safety of employees and our customers.</p>
                      </div>
                  </div>
                </div>

                <div className="col-12 col-md-4">
                    <div className="core-values-box">
                        <div className="texts py-md-4 py-0">
                            <h5 className="title">INTEGRITY</h5>
                            <p className="subtexts">We do what is right for our customers, stakeholders and employees.</p>
                        </div>
                    </div>
                </div>  
              </div>
          </div>
            
        </div>
      </div>

      {/* OUR MARKET */}
      <div className="third container-fluid text-center pt-5 pb-4 pb-md-5">
          <div className="row align-items-center d-flex">
            <div className="col-12">
              <h1 className="main-title">OUR MARKET</h1>
                    <p className="mrkt d-none d-md-block">
                      Quest-Air Technology Philippines Inc. provides advanced air solutions designed to meet diverse operational demands across various industries.
                    </p>
            </div>
          </div>

          <div className="row d-flex gap-4 mb-4 mx-md-5 mx-2 justify-content-center">
            <div className="col col-md-3 ind">
              <div className="p-5">
                  <img src="./ind_icon.png" className ="img-fluid" alt='industrialIcon' />
                  <div>INDUSTRIAL</div>
              </div>
            </div>
            <div className="col col-md-3 rsd">
              <div className="p-5">
                  <img src="./rsd_icon.png"className='img-fluid' alt ='residentialIcon'/>
                  <div>RESIDENTIAL</div>
              </div>
            </div>
            <div className="col col-md-3 comm">
              <div className="p-5">
                  <img src="./comm_icon.png" className='img-fluid' alt ='commercialIcon' />
                  <div>COMMERCIAL</div>
              </div>
            </div>
          </div>
      </div>

      {/* CLIENT LIST */}
      <div className="fourth container-fluid pb-md-5 pb-1 pt-md-2 pt-0">
        <div className="row">
          <h1 className='main-title mb-5'>CLIENT LIST</h1>
        </div>

        {/* RESIDENTIAL */}
        <div className="row justify-content-center">
          <section className='col-md-9'>
         <div className="row">
            <h3 className='main-title text-start'>RESIDENTIAL</h3>
        </div>  
        <div className="residential row g-3 mb-5">
            <div className="col-md-3 col-4">
              <img src="./placeholder.png" alt="placeholder" className='w-100'/>
            </div>
            <div className="col-md-3 col-4">
              <img src="./placeholder.png" alt="placeholder" className='w-100'/>
            </div>
            <div className="col-md-3 col-4">
              <img src="./placeholder.png" alt="placeholder" className='w-100'/>
            </div>
            <div className="col-md-3 col-4">
              <img src="./placeholder.png" alt="placeholder" className='w-100' />
            </div>
            <div className="col-md-3 col-4">
              <img src="./placeholder.png" alt="placeholder" className='w-100' />
            </div> 
        </div>
        </section>        
        {/* INDUSTRIAL */}
        <section className='col-md-9'>
         <div className="row">
          <h3 className='main-title text-start'>INDUSTRIAL</h3>
        </div>
        <div className="industrial row g-3 mb-5">
            <div className="col-md-3 col-4">
              <img src="./placeholder.png" alt="placeholder" className='w-100' />
            </div>
            <div className="col-md-3 col-4">
              <img src="./placeholder.png" alt="placeholder" className='w-100'/>
            </div>
            <div className="col-md-3 col-4">
              <img src="./placeholder.png" alt="placeholder" className='w-100'/>
            </div>
            <div className="col-md-3 col-4">
              <img src="./placeholder.png" alt="placeholder" className='w-100' />
            </div>
            <div className="col-md-3 col-4">
              <img src="./placeholder.png" alt="placeholder" className='w-100' />
            </div> 
        </div> 
        </section>
        
        {/* COMMERCIAL */}
        <section className='col-md-9'>
           <div className="row">
          <h3 className='main-title text-start'>COMMERCIAL</h3>
        </div>
        <div className="commercial row g-3 mb-5">
            <div className="col-md-3 col-4">
              <img src="./placeholder.png" alt="placeholder" className='w-100' />
            </div>
            <div className="col-md-3 col-4">
              <img src="./placeholder.png" alt="placeholder" className='w-100'/>
            </div>
            <div className="col-md-3 col-4">
              <img src="./placeholder.png" alt="placeholder" className='w-100'/>
            </div>
            <div className="col-md-3 col-4">
              <img src="./placeholder.png" alt="placeholder" className='w-100' />
            </div>
            <div className="col-md-3 col-4">
              <img src="./placeholder.png" alt="placeholder" className='w-100' />
            </div> 
        </div>
        </section>
        </div>
        
        

       
      </div>
      <Footer />
    </>
  )
}

export default OurCompany
