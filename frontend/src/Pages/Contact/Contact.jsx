import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import './contact.css'

const Contact = () => {
  return (
    <> 
    <Navbar />
    <section className="hero">
        
        <div className="container text-white text-center pt-5 py-3 px-md-2">
            <div className="who-box m-5">
                <h1 className="who fade-in-down p-3">CONTACT US</h1>
                <p className="text fade-in m-3 pt-3 d-none d-md-block">
                    For inquiries you may visit our office or send us a message!
                </p>
            </div>
        </div>
    </section>

    <section className="container-fluid pt-md-5 pt-sm-3 pb-5 bg-white">
        <div className="row px-md-0 px-4 justify-content-center">
            {/* Contact Form */}
            <section className="left col-md-4 col-sm-12 ">
                <h4 className='text-start fw-bold pt-4 pt-md-0'>Get in touch with us!</h4><hr /> 
                <div className="row">

                    {/* Full Name */}
                    <div className="col-12 text-start mb-3"> 
                        <div className="form-floating">
                            <input type="text" className=" form-control" name="name" placeholder="Enter Full Name"/>
                            <label>Full Name</label>
                        </div>
                    </div>
                    
                    {/* Company Name
                    <div className="col-md-6 col-sm-12 text-start mb-3">
                        <div className="form-floating">
                            <input type="text" className="form-control" name="company-name" placeholder="Enter Company Name"/>
                            <label>Company Name</label>
                        </div>
                    </div> */}

                </div>

                <div className="row">

                    {/* Contact Number */}
                    <div className="col-md-5 col-sm-12 text-start mb-3">
                        <div className="form-floating">
                            <input type="tel" className="form-control" name="contact" placeholder="Enter Contact Number"
                            inputMode='numeric' />
                            <label >Contact Number</label>
                        </div>
                    </div>

                    {/* Email Address */}
                    <div className="col-md-7 col-sm-12 text-start mb-3">
                        <div className="form-floating">
                            <input type="email" className="form-control" name ="email" placeholder="name@example.com"/>
                            <label >Email address</label>
                        </div>
                    </div>

                </div>

                <div className="row">
                    {/* Message */}
                    <div className="col-12 text-start mb-3">
                        <div className="form-floating">
                            <textarea rows="4" className="form-control h-100" name ="message" placeholder="Enter Message"/>
                            <label>Message</label>
                        </div>
                    </div>

                </div>

                {/* Submit */}
                <div className="row">
                        <div className="col-md-3 col-sm-12 justify-content-start d-flex">
                        <button className='text-white fw-bold btn btn-primary w-100' type='submit'>
                                <div> 
                                    Submit
                                </div>
                        </button>
                    </div>
                </div>

                
            </section>

            {/* Sales and Support */}
            <section className="right col-md-6 col-sm-12 align-items-center d-flex ">
                    <div className="row">
                        <div className="col bg-white mt-5 mb-4 px-3">
                        <div className="row one justify-content-center gap-5">
                        
                            <div className="col-md-5 col cards">
                                <div className="row justify-content-start px-5 pt-4">
                                <img src="./sales.png" className="w-25 rounded-circle" alt="sales"></img>
                                </div>
                                <div className="row">
                                    <h4 className='fw-bold main text-start px-5 pt-4'>Sales</h4>
                                </div>
                                <div className="row">
                                    <p className='text-start px-5'>
                                        Explore how our innovative solutions can empower your 
                                        business. We're here to answer your questions and guide 
                                        you through your options.
                                    </p>
                                    <div className="col justify-content-start d-flex px-5 pb-5">
                                        <a className='text-white fw-bold btn btn-primary' href = "mailto:sales@questair.com.ph" target ="_blank">
                                            Contact Sales
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-5 col cards">
                                <div className="row justify-content-start px-5 pt-4">
                                <img src="./support.png" className="w-25 rounded-circle" alt="support"></img>
                                </div>
                                <div className="row">
                                    <h4 className='fw-bold main text-start px-5 pt-4'>Support</h4>
                                </div>
                                <div className="row">
                                    <p className='text-start px-5'>We stand by our products and services.
                                        We are dedicated to resolving your concerns
                                        and ensuring your continued success.
                                    </p>
                                    <div className="col justify-content-start d-flex px-5 pb-5">
                                        <a className='text-white fw-bold btn btn-primary' href = "mailto:hrd_admin@questair.com.ph" target ="_blank">
                                            Contact Support
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
            </section>
        </div>
        
    </section>

        <Footer />


    </>
  )
}

export default Contact
