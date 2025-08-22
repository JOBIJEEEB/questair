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
     'Electrical BIM & VDC': {
        title: 'Electrical BIM & VDC',
        description:
        'A comprehensive service targeting electrical contractors and project teams to streamline design and construction workflows using Building Information Modeling (BIM) and Virtual Design and Construction (VDC) technologies.',
        points: [
        '3D Electrical Model Creation & Coordination',
        'Clash Detection & Resolution',
        'Systems Performance Simulation',
        ],
        image: './services/elec_bim.jpg', 
    },
    
    'Mechanical & Plumbing': {
        title: 'Mechanical & Plumbing',
        description:
        'Focused on delivering precise mechanical and plumbing system models to enhance project accuracy and coordination, from design through to installation.',
        points: [
        'Pipe Routing & Equipment Layout Optimization',
        'Integration with HVAC and Fire Protection Systems',
        ],
        image: './services/mech_plumb.jpg', 
    },

    'Civil Underground': {
        title: 'Civil Underground',
        description:
        'Providing expert modeling and coordination services for underground civil infrastructure, ensuring smooth integration with other site disciplines and adherence to project specifications.',
        points: [
        'Underground Utility Modeling & Coordination',
        'Geotechnical Data Incorporation',
        ],
        image: './services/civil-underground.jpg', 
    },

    'Concrete BIM & VDC': {
        title: 'Concrete BIM & VDC',
        description:
        'Specialized BIM and VDC services tailored to concrete contractors and structural teams, designed to improve constructability and project delivery through detailed concrete modeling.',
        points: [
        'Rebar Detailing & Placement Modeling',
        'Concrete Pour Sequencing & Planning',
        'Structural Model Validation',
        'Constructability Reviews & Clash Resolution',
        ],
        image: './services/concrete_bim.jpg', 
    },
    
    'VDC Coordination Management': {
        title: 'VDC Coordination Management',
        description:
        'A centralized service providing comprehensive coordination management for all trades and disciplines, bridging communication gaps to ensure project milestones are met with efficiency.',
       points: [
        'Multi-Discipline Model Coordination',
        'Clash Detection & Issue Tracking',
        'Coordination Meeting Facilitation',
        'Scheduling & Progress Monitoring',
        ],
        image: './services/VDC.jpg', 
    },

    'Onsite Quality Control': {
        title: 'Onsite Quality Control',
        description:
        'Focused on supporting construction quality assurance through digital tools, onsite inspections, and real-time data collection to help reduce rework and maintain project standards.',
        points: [
        'Field Data Collection & Reporting',
        'Integration with BIM for Visual Inspections',
        'Quality Tracking & Issue Resolution',
        ],
        image: './services/onsite_qc.jpg', 
    },
    
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
        image: './services/enhanced_des.jpg', 
    },

    };
    const [selected, setSelected] = useState('Electrical BIM & VDC');

    return (
        <>
        
        <Navbar />
        {/* HERO SECTION */}
            <section className="container-fluid px-5 py-5 bg1">
                <div className="hero row align-items-center">
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

        {/* STATS SECTION */}
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

        {/* SERVICES */}
            <section className="services container py-5">
                <h3 className="mb-4 fw-bold">Services</h3>
                <div className="row align-items-start justify-content-center">
                    {/* Left menu */}
                    <div className="col-md-4 mb-md-0 mb-3">
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
                        className="card-img-top services-img"
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
            
        {/* LATEST NEWS */}
            <section className="news container py-5">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                        <h3 className="mb-4 fw-bold text-center">Latest News</h3>
                        {/* <p className="mb-4 text-center text-muted">Stay informed with our recent news and events.</p> */}
                    </div>
                </div>
            </div>

            <div className="container overflow-hidden">
                <div className="row gy-3 gy-lg-0 gx-xxl-5 mb-5 mt-3">

                    <article className="col-12 col-lg-4">
                        <div className='card p-4'>
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
                                   
                                    <a className="fs-7 text-secondary text-decoration-none d-flex align-items-center">
                                   <img src='./calendar.png' className='img-fluid'/>
                                    <span className="ms-2 fs-7">Aug 22 2025</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </article>

                    <article className="col-12 col-lg-4">
                        <div className='card p-4'>
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
                                    <img src='./calendar.png' className='img-fluid'/>
                                    <span className="ms-2 fs-7">Aug 22 2025</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </article>

                    <article className="col-12 col-lg-4">
                        <div className='card p-4'>
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
                                    <img src='./calendar.png' className='img-fluid'/>
                                    <span className="ms-2 fs-7">Aug 22 2025</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </article>
                </div>
            </div>
            </section>

        {/* LATEST EVENTS */}
            <section className='events container pb-5 bg'>
                <h3 className='mb-4 fw-bold'>Latest Events</h3>

                <event className="event row border rounded-4 mb-5 align-items-center justify-content-center mx-md-0 mx-3">
                    <div className="col-md-4 col-12">
                        <div className="bg-white m-4">
                            <img src='./events/event1.webp' className='img-fluid rounded-2'/>
                        </div>
                    </div>
                    <div className="col-md-8 text-md-start">
                        <div className="fw-bold row">
                            <h2>
                                QAT Family Fun Run 2025
                            </h2>
                            <ul className="entry-meta list-unstyled d-flex align-items-center justify-content-md-start justify-content-center mb-0">
                                <li>
                                    <a className="fs-7 text-secondary text-decoration-none d-flex align-items-center">
                                    <img src='./calendar.png' className='img-fluid'/>
                                    <span className="ms-2 fs-7">Aug 22 2025</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-muted row mt-1 d-none d-md-block">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            </p>
                        </div>

                        {/* POP-UP */}
                        <div className="row mt-md-0 mt-3 mb-md-0 mb-4">
                            <div className="col-md-4">
                                <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#event1'>Learn more</button>
                            </div>

                            <div class="modal fade" id="event1" tabindex="-1" role="dialog" aria-labelledby="event1" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="label">Event Details</h5>
                                            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true"></span>
                                            </button>
                                        </div>

                                        <div class="modal-body">
                                            <div className="row text-justified">
                                                <img src='./events/event1.webp' className='img-fluid'/>
                                                <div className='mb-md-3 mb-2'>
                                                 <h4 className='text-center mt-md-3 mt-2'>QAT Family Fun Run 2025</h4>
                                                 <ul className="entry-meta list-unstyled d-flex align-items-center justify-content-center mb-0">
                                                    <li>
                                                        <a className="fs-7 text-secondary text-decoration-none d-flex align-items-center">
                                                    <img src='./calendar.png' className='img-fluid'/>
                                                        <span className="ms-2 fs-7">Aug 22 2025</span>
                                                        </a>
                                                    </li>
                                                 </ul>
                                                </div>
                                                
                                                <p className='text-center'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                </p>
                                            </div>
                                        </div>

                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </event>

                <event className="event row border rounded-4 mb-5 align-items-center justify-content-center mx-md-0 mx-3">
                    <div className="col-md-4 col-12">
                        <div className="bg-white m-4">
                            <img src='./events/event2.webp' className='img-fluid rounded-2'/>
                        </div>
                    </div>
                    <div className="col-md-8 text-md-start">
                        <div className="fw-bold row">
                            <h2>
                                2025 Quarterly Nationwide Simultaneous Earthquake Drill
                            </h2>
                            <ul className="entry-meta list-unstyled d-flex align-items-center justify-content-md-start justify-content-center mb-0">
                                <li>
                                    <a className="fs-7 text-secondary text-decoration-none d-flex align-items-center">
                                    <img src='./calendar.png' className='img-fluid'/>
                                    <span className="ms-2 fs-7">Aug 22 2025</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-muted row mt-1 d-none d-md-block">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            </p>
                        </div>

                        {/* POP-UP */}
                        <div className="row mt-md-0 mt-3 mb-md-0 mb-4">
                            <div className="col-md-4">
                                <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#event2'>Learn more</button>
                            </div>

                            <div class="modal fade" id="event2" tabindex="-1" role="dialog" aria-labelledby="event2" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="label">Event Details</h5>
                                            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true"></span>
                                            </button>
                                        </div>

                                        <div class="modal-body">
                                            <div className="row text-justified">
                                                <img src='./events/event2.webp' className='img-fluid'/>
                                                <div className='mb-md-3 mb-2'>
                                                 <h4 className='text-center mt-md-3 mt-2'>2025 Quarterly Nationwide Simultaneous Earthquake Drill</h4>
                                                 <ul className="entry-meta list-unstyled d-flex align-items-center justify-content-center mb-0">
                                                    <li>
                                                        <a className="fs-7 text-secondary text-decoration-none d-flex align-items-center">
                                                    <img src='./calendar.png' className='img-fluid'/>
                                                        <span className="ms-2 fs-7">Aug 22 2025</span>
                                                        </a>
                                                    </li>
                                                 </ul>
                                                </div>
                                                
                                                <p className='text-center'>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                </p>
                                            </div>
                                        </div>

                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </event>
            </section>
        <Footer />
        </>
    )
}

export default Home