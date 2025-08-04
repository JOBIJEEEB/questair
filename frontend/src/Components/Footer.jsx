import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
     <footer className="ft text-white py-4">
      <div className='container-fluid px-4'>
        <div className="row d-flex">
            <div className="col-12 col-md-3 d-flex align-items-center justify-content-center">
                <img src="./quest-air.png" className='shadow-lg img-fluid custom-img object-fit-contain' alt='footerLogo'/>
            </div>

            <div className="col-12 col-md-3 mb-4">
                <div className="row">
                    <h4 className='pb-2 pt-2 text-start'>Head Office</h4>
                </div>
                <div className="row">
                    <Link className="col-auto" to="https://tinyurl.com/Quest-Air" target ="_blank">
                        <img src="./loc.png" className='img-fluid' alt='location_icon'/>
                    </Link>
                    <div className="col-md-8 col-9 text-start">
                        <Link className='link-text' 
                        to="https://tinyurl.com/Quest-Air" target ="_blank">
                        Lot 7A-2 Sooner Farm Compound, Barangay Timbao,Binan, 4024, Laguna, Philippines
                        </Link>
                    </div> 
                </div>
            </div>

            <div className="ctc col-12 col-md-3 mb-4">
                <div className="row">
                    <h5 className='pb-2 pt-2 text-start'>Contact Us</h5>
                </div>

                <div className="row">
                    <a className="col-auto" href="mailto:sales@questair.com.ph" target ="_blank">
                        <img src="./email_icon.png" className='img-fluid' alt='location_icon'/>
                    </a>
                    <div className="col-md-8 col-9">
                        <Link className='link-text'  to="mailto:sales@questair.com.ph" target ="_blank">
                            <p className='text-start'>sales@questair.com.ph</p>
                        </Link>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-auto"><img src="./phone.png" className='object-fit-fill' alt='phone_icon'/></div>
                    <div className="col-md-8 col-9"><p className='text-start'>(049) 542 - 5350</p></div> 
                </div>

                <div className="row">
                    <div className="col-auto"><img src="./phone.png" className='object-fit-fill' alt='phone2_icon'/></div>
                    <div className="col-md-8 col-9"><p className='text-start'>(049) 512 - 9883</p></div> 
                </div> 

            </div>

            <div className="fnd col-12 col-md-3">
                <div className="row">
                    <h5 className='pb-2 pt-2 text-start'>Find Us On</h5>
                </div>

                <div className="row">
                    <Link className="col-auto" to = "https://www.facebook.com/questairtech/" target="_blank"><img src="./fb_icon.png" className='img-fluid' alt='fb_icon'/></Link>
                    <div className="col-md-8 col-9">
                        <Link className='link-text' to = "https://www.facebook.com/questairtech/" target="_blank">
                        <p className='text-start'>@questairtech</p>
                        </Link>
                    </div> 
                </div>

                <div className="row">
                   <Link className="col-auto" to = "https://ph.linkedin.com/company/quest-air-technology-phils-inc" target="_blank"><img src="./linkedin_icon.png" className='img-fluid' alt='fb_icon'/></Link>
                    <div className="col-md-8 col-9">
                        <Link className='link-text' to = "https://ph.linkedin.com/company/quest-air-technology-phils-inc" target="_blank">
                        <p className='text-start'>@Quest-air</p>
                        </Link>
                    </div> 
                </div>
            </div>
        </div>
        <hr />
        <div className="col-12 row mt-3">
            <div className="col-12 text-center pt-3">
                <p className="ftext">©2025 Quest-Air Technology Phils., Inc. All rights reserved.</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
