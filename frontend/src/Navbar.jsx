import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <div className="container">
                    <a className="navbar-brand" href="#"><img className='qat_logo' src="qat_logo.png" alt="Logo" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item pe-2">
                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                            <li className="nav-item pe-2">
                                <Link className="nav-link" to="#">Our Company</Link>
                            </li>
                            <li className="nav-item pe-2">
                                <Link className="nav-link" to="#">Our Services</Link>
                            </li>
                            <li className="nav-item pe-2">
                                <Link className="nav-link" to="#">Career</Link>
                            </li>
                            <li className="nav-item pe-2">
                                <Link className="nav-link" to="#">Contact Us</Link>
                            </li>
                            <li className="nav-item pe-2">
                                <Link className="nav-link" to="#">Webmail</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-primary px-4" type="submit">Contact</button>
                        </form>
                    </div>
                </div>
                </nav>
        </>
    )
}

export default Navbar