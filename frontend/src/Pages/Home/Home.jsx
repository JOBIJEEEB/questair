import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar';
import './home.css';
import Footer from '../../Components/Footer';

function Home(){
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log('wer'));
    },[])
    const stats = [
    { number: '200+', label: 'Employees in 6 offices' },
    { number: '350+', label: 'Projects' },
    { number: '20+', label: 'Years of experience' },
    { number: '70+', label: 'Trusted companies' },
    ];
    
    const services = [
    { name: 'Electrical BIM & VDC', icon: '⚙️' },
    { name: 'Mechanical & Plumbing', icon: '🚰' },
    { name: 'Civil Underground', icon: '🛠️' },
    { name: 'Concrete BIM & VDC', icon: '🏗️' },
    { name: 'VDC Coordination Management', icon: '🧩' },
    { name: 'Onsite Quality Control', icon: '🦺' },
    { name: 'Enhanced Design', icon: '📐' },
    ];

    const serviceDetails = {
    'Enhanced Design': {
        title: 'Enhanced Design',
        description:
        'A service specifically tailored for owners and developers. We help bridge the gap between design and construction by leveraging our proprietary process and vast experience in preconstruction.',
        points: [
        'Digital Execution & Governance Planning',
        'Validate & Optimize System Distribution',
        'Design Model Development to LOD 350',
        'Model-Based Cost Analysis',
        ],
        image: 'https://via.placeholder.com/600x300?text=Enhanced+Design', // Placeholder
    },
    
    // You can add more service details for other services if needed
    };
    const [selected, setSelected] = useState('Enhanced Design');
    return (
        <>
        <Navbar />
            <section className="container-fluid px-5 py-5 bg1">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-start">
                    <h2 className="fw-bold text-primary mb-4">
                        One of the Philippines’ leading Engineering Firm, Contractor and Fabricator
                    </h2>
                    <p className="text-secondary">
                        Quest-Air Technology Phils, Inc. (QAT) is dynamic & progressive construction company whose core competencies are in Mechanical Airconditioning & Ventilation, Electrical Distribution & Ancillaries, Fire Protection Systems & Plumbing Works. We are an acknowledged leader in Cleanroom Design and Construction.
                    </p>
                    <a href="#" className="btn btn-primary mt-4">View portfolio</a>
                    </div>
                    <div className="col-lg-6 position-relative image-stack">
                        <div className="angled-image image-3">
                            <img src="image1.png" alt="Image 3" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-white text-center">
                    <div className="container">
                        {/* Title & Paragraph */}
                        <div className="mb-5">
                        <h2 className="fw-bold">Providing Nationwide Services</h2>
                        <p className="text-muted mx-auto" style={{ maxWidth: '800px' }}>
                        Quest-Air Technology Philippines Inc. is a constantly growing business cooperating with leading engineers, designers,
                        and contractors with vast expertise in BIM, virtual design, and construction technologies.
                        Since its foundation, we have delivered over 350+ nationwide projects...
                        </p>
                        </div>

                        {/* Stats Cards */}
                        <div className="row g-4 justify-content-center">
                            {stats.map((stat, index) => (
                                <div className="col-12 col-sm-6 col-lg-3" key={index}>
                                    <div className="p-4 shadow-sm border rounded-4 h-100">
                                        <h3 className="fw-bold text-primary display-6">{stat.number}</h3>
                                        <p className="mb-0 text-muted">{stat.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
            </section>

            <section className="container py-5">
                <h3 className="mb-4 fw-bold">Services</h3>
                <div className="row">
                    {/* Left menu */}
                    <div className="col-md-4">
                        <div className="list-group">
                            {services.map((service) => (
                            <button
                                key={service.name}
                                type="button"
                                className={`list-group-item list-group-item-action ${selected === service.name ? 'active' : ''}`}
                                onClick={() => setSelected(service.name)}
                            >
                                <span className="me-2">{service.icon}</span>
                                {service.name}
                            </button>
                            ))}
                        </div>
                    </div>

                    {/* Right content */}
                    <div className="col-md-8">
                    <div className="card shadow">
                        <img
                        src={serviceDetails[selected]?.image}
                        className="card-img-top"
                        alt={selected}
                        />
                        <div className="card-body">
                        <h5 className="card-title fw-bold">{serviceDetails[selected]?.title}</h5>
                        <p className="card-text">{serviceDetails[selected]?.description}</p>
                        <ul className="list-unstyled">
                            {serviceDetails[selected]?.points?.map((point, idx) => (
                            <li key={idx} className="mb-1">
                                <span className="text-success me-2">✔️</span>
                                {point}
                            </li>
                            ))}
                        </ul>
                        <a href="#" className="btn btn-primary mt-3">Learn More</a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            
            <section className="news container py-5">
            <div className="container">
                <div className="row justify-content-md-center">
                <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                    <h3 className="mb-4 fw-bold text-center">Latest News</h3>
                    <p className="mb-4 text-center text-muted">Stay informed with our recent news and events.</p>
                    
                </div>
                </div>
            </div>

            <div className="container overflow-hidden">
                <div className="row gy-3 gy-lg-0 gx-xxl-5 mb-5 mt-3">

                    <div className="col-12 col-lg-4">
                        <article className='card p-4'>
                        <figure className="rounded mb-3">
                            <a href="">
                                <img className="img-fluid"  src="./news/business.jpg" alt="Business" />
                            </a>
                        </figure>
                        <div className="entry-header mb-3">
                            <ul className="entry-meta list-unstyled d-flex mb-2">
                            <li>
                                <a className="link-primary text-decoration-none" href="">Business</a>
                            </li>
                            </ul>
                            <h2 className="entry-title h4 mb-0 text-start">
                            <a className="link-dark text-decoration-none" href="#!">Philippine Business Conference and Expo</a>
                            </h2>
                        </div>
                        <div className="entry-footer">
                            <ul className="entry-meta list-unstyled d-flex align-items-center mb-0">
                                <li>
                                    <a className="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
                                    <svg width="14" height="14" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg>
                                    <span className="ms-2 fs-7">7 Feb 2023</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        </article>
                    </div>

                    <div className="col-12 col-lg-4">
                        <article className='card p-4'>
                        <figure className="rounded mb-3">
                            <a href="">
                                <img className="img-fluid"  src="./news/tech.jpg" alt="ISO" />
                            </a>
                        </figure>
                        <div className="entry-header mb-3">
                            <ul className="entry-meta list-unstyled d-flex mb-2">
                            <li>
                                <a className="link-primary text-decoration-none" href="">Milestone</a>
                            </li>
                            </ul>
                            <h2 className="entry-title h4 mb-0 text-start">
                            <a className="link-dark text-decoration-none" href="">QAT achieves ISO 12345:2025 certification</a>
                            </h2>
                        </div>
                        <div className="entry-footer">
                            <ul className="entry-meta list-unstyled d-flex align-items-center mb-0">
                                <li>
                                    <a className="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
                                    <svg width="14" height="14" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg>
                                    <span className="ms-2 fs-7">7 Feb 2023</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        </article>
                    </div>

                    <div className="col-12 col-lg-4">
                        <article className='card p-4'>
                        <figure className="rounded mb-3">
                            <a href="">
                                <img className="img-fluid"  src="./news/3.jpg" alt="Business" />
                            </a>
                        </figure>
                        <div className="entry-header mb-3">
                            <ul className="entry-meta list-unstyled d-flex mb-2">
                            <li>
                                <a className="link-primary text-decoration-none" href="">Business</a>
                            </li>
                            </ul>
                            <h2 className="entry-title h4 mb-0 text-start">
                            <a className="link-dark text-decoration-none" href="">Building constructions rebounded by 13%</a>
                            </h2>
                        </div>
                        <div className="entry-footer">
                            <ul className="entry-meta list-unstyled d-flex align-items-center mb-0">
                                <li>
                                    <a className="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
                                    <svg width="14" height="14" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg>
                                    <span className="ms-2 fs-7">7 Feb 2023</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        </article>
                    </div>
                </div>
            </div>
            </section>

            <section className='events container pb-5'>
                <h3 className='mb-4 fw-bold'>Latest Events</h3>
                <div className="row shadow border rounded-2">
                    <div className="col-md-4 bg-primary">
                        
                        <div className="shadow bg-white m-5">
                            <img src='placeholder.png' className='img-responsive'/>
                        </div>
                    </div>
                    <div className="col-md-8 text-start">
                        <div className="text fw-bold row mt-5 mx-2 px-1">
                            <h1>
                                Headline
                            </h1>
                        </div>
                        <div className="subtext text-muted row mt-1 mx-2 px-1">
                                <p>
                                    asdsadada
                                </p>
                        </div>
                    </div>
                </div>
            </section>
        <Footer />
        </>
    )
}

export default Home