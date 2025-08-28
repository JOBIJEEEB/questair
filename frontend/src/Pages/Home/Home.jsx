import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import News from '../Home/News'
import Events from '../Home/Events'
import './home.css';

function Home(){
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/')
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
    const [selected, setSelected] = useState('Electrical BIM & VDC');
    const serviceDetails = {
     'Electrical BIM & VDC': {
        title: 'Electrical BIM & VDC',
        description:
        `A comprehensive service targeting electrical contractors and project teams to
        streamline design and construction workflows using Building Information Modeling
        (BIM) and Virtual Design and Construction (VDC) technologies.`,
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
        `Focused on delivering precise mechanical and plumbing system models to
        enhance project accuracy and coordination, from design through to installation.`,
        points: [
        'Pipe Routing & Equipment Layout Optimization',
        'Integration with HVAC and Fire Protection Systems',
        ],
        image: './services/mech_plumb.jpg', 
    },

    'Civil Underground': {
        title: 'Civil Underground',
        description:
        `Providing expert modeling and coordination services for
        underground civil infrastructure, ensuring smooth integration
        with other site disciplines and adherence to project specifications.`,
        points: [
        'Underground Utility Modeling & Coordination',
        'Geotechnical Data Incorporation',
        ],
        image: './services/civil-underground.jpg', 
    },

    'Concrete BIM & VDC': {
        title: 'Concrete BIM & VDC',
        description:
        `Specialized BIM and VDC services tailored to concrete contractors
        and structural teams, designed to improve constructability and project
        delivery through detailed concrete modeling.`,
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
        `A centralized service providing comprehensive coordination
        management for all trades and disciplines, bridging communication
        gaps to ensure project milestones are met with efficiency.`,
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
        `Focused on supporting construction quality assurance through
        digital tools, onsite inspections, and real-time data collection
        to help reduce rework and maintain project standards.`,
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
        `A service specifically tailored for owners and developers.
        We help bridge the gap between design and construction by
        leveraging our proprietary process and vast experience in preconstruction.`,
        points: [
        'Digital Execution & Governance Planning',
        'Validate & Optimize System Distribution',
        'Design Model Development to LOD 350',
        'Model-Based Cost Analysis',
        ],
        image: './services/enhanced_des.jpg', 
    },

    };
    
    return (
        <div className='bg-white'>
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
                                onClick={() => setSelected(service.name)}>
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
        <News />
        <Events />
        <Footer />
        </div>
    )
}

export default Home