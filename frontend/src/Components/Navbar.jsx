// import { Link } from 'react-router-dom'
import './navbar.css'
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [url, setUrl] = useState(null);
  useEffect(() => {setUrl(location.pathname);}, [location]);
  
  return (
    <>
      <nav className="shadow navbar navbar-dark navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand">
            <Link to="/">
              <img className='qat_logo' src="./quest-air.png" alt="Logo" />
            </Link>
          </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                  <ul className="navbar-nav mx-auto mb-3 mb-lg-0 d-flex gap-md-5 gap-0 pt-md-0 pt-3">
                      <li className="nav-item">
                        <Link className={"nav-link" + (url === "/home" ?" active" : "")} aria-current="page" to="/home">Home</Link>
                      </li>

                      <li className="nav-item">
                        <Link className={"nav-link" + (url === "/company" ?" active" : "")} to="/company">Our Company</Link>
                      </li>

                      <li className="nav-item">
                        <Link className={"nav-link" + (url === "/services" ?" active" : "")} to="/services">Our Services</Link>
                      </li>

                      <li className="nav-item">
                        <Link className={"nav-link" + (url === "/career" ?" active" : "")} to="/career">Career</Link>
                      </li>

                      <li className="nav-item">
                        <Link className={"nav-link" + (url === "/contact" ?" active" : "")} to="/contact">Contact Us</Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="https://www.questair.com.ph:2096/"
                        target ="_blank">Webmail</Link>
                      </li>
                    </ul>
                

                    {/* <div className="d-flex justify-content-center mb-3 mb-md-0">
                      <button className="ctcbtn btn text-white px-4" type="button">
                        <Link className={"nav-link" + (url === "/contact" ?"" : "")} to="/contact">Contact</Link>
                        </button>
                    </div> */}
                      
                  </div>
          </div>
        </nav>
    </>
  )
}

export default Navbar