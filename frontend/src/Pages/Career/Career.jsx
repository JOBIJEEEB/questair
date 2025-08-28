import Footer from '../../Components/Footer'
import Navbar from '../../Components/Navbar'
import './career.css'

const images = [
  { src: './carousel/pic1.jpg', alt: 'Pic1' },
  { src: './carousel/pic2.jpg', alt: 'Pic2' },
  { src: './carousel/pic3.jpg', alt: 'Pic3' },
  { src: './carousel/pic4.jpg', alt: 'Pic4' },
  { src: './carousel/pic5.jpg', alt: 'Pic5' },
  { src: './carousel/pic6.jpg', alt: 'Pic6' },
  { src: './carousel/pic7.jpg', alt: 'Pic7' },
  { src: './carousel/pic8.jpg', alt: 'Pic8' },
  { src: './carousel/pic9.jpg', alt: 'Pic9' },
  { src: './carousel/pic10.jpg', alt: 'Pic10' },
  { src: './carousel/pic11.jpg', alt: 'Pic11' },
  { src: './carousel/pic12.jpg', alt: 'Pic12' },
  { src: './carousel/pic13.jpg', alt: 'Pic13' },
];

const Career = () => {
  return (
    <> 
      <Navbar />
      <div className="hero">
        <div className="first container text-white text-center pt-5 py-5 px-md-2">
            <div className="who-box m-md-5 m-1">
                <h1 className="who fade-in-down p-3">BE PART OF OUR SUCCESS</h1>
            </div>
        </div>
      </div>

      <div className="container-fluid bg-white p-md-5 px-4 pt-3 ">
        <div className="row justify-content-center">
            <div id="carouselIndicators" className="col-md-7 col-12 carousel slide px-0" data-bs-ride="carousel" data-bs-interval="3000">
              <div className="carousel-indicators">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    data-bs-target="#carouselIndicators"
                    data-bs-slide-to={i}
                    className={i === 0 ? 'active' : ''}
                    aria-current={i === 0 ? 'true' : undefined}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
              <div className="carousel-inner">
                {images.map((img, i) => (
                  <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                    <img src={img.src} className="d-block w-100 h-50" alt={img.alt} />
                  </div>
                ))}
              </div>

              <button className="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>

              <button className="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
              
            </div>
            <div className="col-md-7 col-12 text-start text-white head">
                <h1 className='fw-bold pt-3 px-2'>START YOUR CAREER WITH US!</h1> <hr />
                <p className='text-white text-justify px-2'>The heart of our company has always been the exceptional people who
                  strive hard work for the success of the company. We believe in
                  motivated and passionate people to deliver better services to our clients.
                  </p>
            </div>        
        </div>
      </div>
              
      <div className="container-fluid bg-white pb-4 pt-1">
        <div className="row pb-5 d-flex justify-content-center">
          <div className="col-12">
            <h3 className='fw-bold main-title'>BE PART OF A COMPANY WHO OFFERS GROWTH</h3>
           </div>  
            <div className="col-12 col-md-8">
              <p className='text-muted text-justify pt-1'>You may email your resume to <b>hrd_admin@questair.com.ph </b> 
                or you can drop your resume at our main office located at <b>Lot 7-A Sooner Farm Compound,
                Brgy. Timbao, Biñan, Laguna.</b></p> 
              <a className='text-white fw-bold btn btn-primary' href = "mailto:hrd_admin@questair.com.ph" target ="_blank">
                Send us your resume here! 
                </a>
            </div>
              
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Career
