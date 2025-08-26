import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import './home.css';
// import Pagination from "react-bootstrap/Pagination";

function Home(){
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5173/')
        .then(res => setData(res.data))
        .catch(err => console.log('error'));
    },[])
    const stats = [
    { number: '200+', label: 'Employees in 6 offices' },
    { number: '350+', label: 'Projects' },
    { number: '20+', label: 'Years of experience' },
    { number: '70+', label: 'Trusted companies' },
    ];
    
    //SERVICES LEFT PANEL
    const services = [
    { name: 'Electrical BIM & VDC', icon: '⚙️' },
    { name: 'Mechanical & Plumbing', icon: '🚰' },
    { name: 'Civil Underground', icon: '🛠️' },
    { name: 'Concrete BIM & VDC', icon: '🏗️' },
    { name: 'VDC Coordination Management', icon: '🧩' },
    { name: 'Onsite Quality Control', icon: '🦺' },
    { name: 'Enhanced Design', icon: '📐' },
    ];

    // SERVICES RIGHT PANEL DATA
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

    //NEWS DATA
    const newsData = [
    // FIRST PAGE
    [
        {
        img: "./news/business.jpg",
        category: "Business",
        title: "Philippine Business Conference and Expo",
        date: "Aug 22 2025",
        calendar: "./calendar.png",
        },
        {
        img: "./news/tech.jpg",
        category: "Milestone",
        title: "QAT achieves ISO 12345:2025 certification",
        date: "Aug 22 2025",
        calendar: "./calendar.png",
        },
        {
        img: "./news/3.jpg",
        category: "Business",
        title: "Building constructions rebounded by 13%",
        date: "Aug 22 2025",
        calendar: "./calendar.png",
        },
    ],

    // SECOND PAGE
    [
        {
        img: "./news/ai.jpg",
        category: "Technology",
        title: "AI Trends and Innovations in the Philippines 2025",
        date: "Aug 23 2025",
        calendar: "./calendar.png",
        },
        {
        img: "./news/ai.jpg",
        category: "Technology",
        title: "AI Trends and Innovations in the Philippines 2025",
        date: "Aug 23 2025",
        calendar: "./calendar.png",
        },
        {
        img: "./news/ai.jpg",
        category: "Technology",
        title: "AI Trends and Innovations in the Philippines 2025",
        date: "Aug 23 2025",
        calendar: "./calendar.png",
        },
    ],
    ];

    //EVENTS DATA 
    const [selectedEvent, setSelectedEvent] = useState();
    const events = [
    {
    id: 1,
    title: "QAT Family Fun Run 2025",
    date: "Aug 22 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    img: "./events/event1.webp",
    calendar: "./calendar.png"
    },
    {
    id: 2,
    title: "2025 Quarterly Nationwide Earthquake Drill",
    date: "Aug 22 2025",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco...",
    img: "./events/event2.webp",
    calendar: "./calendar.png"
    },
    {
    id: 3,
    title: "Tech Innovation Summit 2025",
    date: "Sep 15 2025",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    img: "./events/event2.webp",
    calendar: "./calendar.png"
    },
    {
    id: 4,
    title: "Annual CSR Tree Planting",
    date: "Oct 1 2025",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse...",
    img: "./events/event1.webp",
    calendar: "./calendar.png"
    }
    ];
   

    //FOR EVENTS PAGINATION
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 2;

    const indexOfLast = currentPage * eventsPerPage;
    const indexOfFirst = indexOfLast - eventsPerPage;
    const currentEvents = events.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(events.length / eventsPerPage);

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
                        <div className="card-body text-start">
                        <h4 className="card-title fw-bold">{serviceDetails[selected]?.title}</h4>
                        <p className="card-text">{serviceDetails[selected]?.description}</p>
                        <ul className="list-unstyled">
                            {serviceDetails[selected]?.points?.map((point, idx) => (
                            <li key={idx} className="mb-1">
                                <span className="text-success me-2">☑️</span>
                                {point}
                            </li>
                            ))}
                        </ul>
                        <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            
        {/* LATEST NEWS */}
            <section className="news container py-md-5 p-md-0">
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                        <h3 className="mb-4 fw-bold text-center">Latest News</h3>
                    </div>
                </div>
            </div>
            
            <div id="news" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                {newsData.map((slide, slideIndex) => (
                <div key={slideIndex} className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}>
                <div className="row text-start justify-content-center">
                {slide.map((item, idx) => (
                    <div className="col-md-4 col-10 my-3" key={idx}>
                    <div className="card shadow-sm h-100">
                        <img
                        src={item.img}
                        className="card-img-top"
                        alt={item.title}
                        />
                        <div className="card-body">
                        <h6 className="text-primary">{item.category}</h6>
                        <h5 className="card-title">{item.title}</h5>

                        {item.calendar ? (
                            <div>
                            <img
                                src={item.calendar}
                                className="img-fluid"
                                alt="calendar"
                                style={{ width: "16px", height: "16px" }}
                            />
                            <span className="ms-2 fs-7">{item.date}</span>
                            </div>
                        ) : (
                            <p className="text-muted mb-0">{item.date}</p>
                        )}
                        </div>
                    </div>
                    </div>
                ))}
                </div>
                </div>
                ))}
                </div>
            </div>

            <div className="d-flex justify-content-md-between justify-content-center gap-md-0 gap-4 mt-2">
                <button className="btn btn-outline-primary" type="button" data-bs-target="#news" data-bs-slide="prev" > ◀ Prev </button>
                <button className="btn btn-outline-primary" type="button" data-bs-target="#news" data-bs-slide="next" > Next ▶ </button>
            </div>
            
            
            </section>

        {/* LATEST EVENTS */}
            <section className="container my-4">
            <h3 className="text-center fw-bold mb-4 pt-md-0 pt-5">Latest Events</h3>

            {currentEvents.map((event) => (
                <div className="card mb-md-4 mb-4 mx-md-0 mx-4" key={event.id}>
                    <div className="row g-md-4 g-1">
                        <div className="col-md-4 align-content-center justify-items-center">
                        <img src={event.img} className="img-fluid rounded-start" alt={event.title} />
                        </div>
                        <div className="col-md-8 text-md-start">
                        <div className="card-body h-100 align-content-center">
                            <h2 className="card-title">{event.title}</h2>
                            <img className ='img-fluid'src={event.calendar}/>
                            <span className="card-subtitle fw-bold text-muted ms-2 fs-7">{event.date}</span>
                            <p className="card-text">{event.description}</p>
                            <button 
                                type='button' 
                                className='btn btn-primary' 
                                data-bs-toggle='modal' 
                                data-bs-target='#event'
                                onClick={() => setSelectedEvent=(event)} >
                                Learn more
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
            {/* POP-UPS */}
                <div className="modal fade" id="event" tabIndex="-1" role="dialog" aria-labelledby="event" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                            {selectedEvent && (
                                <>
                                
                                <div className="modal-header">
                                    <h5 className="modal-title">{selectedEvent.title}</h5>
                                    <button type='button' className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    Close
                                    </button>
                                </div>

                                <div className="modal-body">
                                    <div className="row text-justified">
                                        <img src='./events/event1.webp' className='img-fluid'/>
                                        <div className='mb-md-3 mb-2'>
                                        <h4 className='text-center mt-md-3 mt-2'>{selectedEvent.title}</h4>
                                        <ul className="entry-meta list-unstyled d-flex align-items-center justify-content-center mb-0">
                                            <li>
                                                <a className="fs-7 text-secondary text-decoration-none d-flex align-items-center">
                                                <img src='./calendar.png' className='img-fluid'/>
                                                <span className="ms-2 fs-7">{selectedEvent.date}</span>
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

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                                </div>

                            </>
                            )}
                        </div>
                    </div>
                </div>
            
            
            
            <nav className="d-flex justify-content-end">
                <ul className="pagination">
                {[...Array(totalPages)].map((_, index) => (
                    <li
                    key={index + 1}
                    className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                    >
                    <button
                        className="page-link"
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                    </li>
                ))}
                </ul>
            </nav>

            </section>
        <Footer />
        </>
    )
}

export default Home