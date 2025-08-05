import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import './our_services.css'

const OurServices = () => {
  return (
    <> 
      <div className="hero">
        <Navbar />
        <div className="first container text-white text-center pt-5 py-5 px-md-2">
            <div className="who-box m-md-5 m-1">
                <h1 className="who fade-in-down p-3">OUR SERVICES</h1>
            </div>
        </div>
      </div>

      <div className="container-fluid fade-in bg-white mt-5 px-5 pt-4 pb-5">
        <div className="services row one gap-4 mx-md-5 mx-1 px-md-5 pt-5 justify-content-center">

          {/* Air conditioning and Ventilation */}
          <div className="col-md-3 anm">
            <div className="row justify-content-center px-5 mb-3">
              <img src="./aircon.png" className="rounded-circle w-75" alt="aircon"></img>
            </div>
            <div className="row">
                <h4 className='fw-bold main text-center '>Air Conditioning and Ventilation</h4>
              </div>
            <div className="row">
              <ul className='text-start px-5 py-1'>
                <li>Design, Calculation and Estimation</li>
                <li>Installation</li>
                <li>Testing</li>
                <li>Operation</li>
              </ul>
            </div>
          </div>

          {/* Fire Protection System */}
          <div className="col-md-3 anm">
            <div className="row justify-content-center px-5 mb-3">
              <img src="./fire.png" className="rounded-circle w-75" alt="fire"></img>
              
            </div>
            <div className="col">
                <h4 className='fw-bold main text-center'>Fire Protection System</h4>
              </div>
            <div className="row">
              <ul className='text-start px-5 py-1'>
                <li>Smoke Detectors</li>
                <li>Fire Hose Cabinet</li>
                <li>Sprinkler System</li>
              </ul>
            </div>
          </div>

          {/* Electrical Works */}
          <div className="col-md-3 anm">
            <div className="row justify-content-center px-5 mb-3">
              <img src="./electrical.png" className="rounded-circle w-75" alt="electrical"></img>
              </div>
            <div className="row">
                <h4 className='fw-bold main text-center'>Electrical Works</h4>
              </div>
            <div className="row">
              <ul className='text-start px-5 py-1'>
                <li>Low voltage Distribution</li>
                <li>Industrial Plant Power Wiring</li>
                <li>Rewiring</li>
              </ul>
            </div>
          </div>

        </div>

        <div className="services row two mt-4 gap-4 mx-md-5 mx-1 px-md-5 pb-5 justify-content-center">

          {/* Clean room design and Construction */}
          <div className="col-md-3 anm">
            <div className="row justify-content-center px-5 mb-2">
              <img src="./cleanRoom.png" className="w-75 rounded-circle" alt="cleanRoomDesign" />
            </div>
            <div className="row">
                <h4 className='fw-bold main text-center'>Clean room design and Construction</h4>
              </div>
            <div className="row">
              <ul className='text-start px-5 py-1'>
                <li>Class 10 to Class 10,000R</li>
                <li>Turn-key Construction</li>
                <li>Testing and Certification</li>
                <li>Facility Performance Evaluation</li>
                <li>Troubleshooting</li>
              </ul>
            </div>
          </div>

          {/* Mechanical Works */}
          <div className="col-md-3 anm">
            <div className="row justify-content-center px-5 mb-2">
              <img src="./mech.png" className="w-75 rounded-circle" alt="mechanical"></img>
            </div>
            <div className="row">
                <h4 className='fw-bold main text-center'>Mechanical Works</h4>
              </div>
              
            <div className="row">
              <ul className='text-start px-5 py-1'>
                <li>Sheet Metal (BI,Gi S/S) Works</li>
                <li>Fabrication and Installation of HVAC Works (Rectagular or Round), 
                  Hoods (Lateral, Suspended, or Slot Type), Diffuses, Louvers & Grilles,
                  Water Tanks</li>
              </ul>
            </div>
          </div>

          {/* Plumbing and Sanitation */}
          <div className="col-md-3 anm">
            <div className="row justify-content-center px-5 mb-2">
              <img src="./plumbing.png" className="w-75 rounded-circle" alt="plumbing"></img>
            </div>
            <div className="row">
                <h4 className='fw-bold main text-center'>Plumbing and Sanitation</h4>
              </div>
            <div className="row">
              <ul className='text-start px-5 py-1'>
                <li>Supply and Installation of Sewer and Drainage System</li>
                <li>Waterline Distribution and Storage Tanks</li>
                <li>Supply and Installation of Plumbing Fixtures and Accessories</li>
              </ul>
            </div>
          </div>

        </div>

          
        
      </div>

      <Footer />
    </>
  )
}

export default OurServices
