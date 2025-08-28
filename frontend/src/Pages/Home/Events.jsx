import './home.css';
import { useState } from 'react';


const Events = () => {

    const [selectedEvent, setSelectedEvent] = useState();
    const events = [
    {
    id: 1,
    title: "QAT Family Fun Run 2025",
    date: "Aug 22 2025",
    caption: " Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    description: `Family fun run Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco`,
    img: "./events/event1.webp",
    calendar: "./calendar.png"
    },
    {
    id: 2,
    title: "2025 Quarterly Nationwide Earthquake Drill",
    date: "Aug 25 2025",
    caption: "Ut enim ad minim veniam, quis nostrud exercitation ullamco...",
    description: `Earthquake Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco`,
    img: "./events/event2.webp",
    calendar: "./calendar.png"
    },
    {
    id: 3,
    title: "Sports Week 2025",
    date: "Sep 15 2025",
    caption: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    description: `Sport Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco`,
    img: "./events/event3.webp",
    calendar: "./calendar.png"
    },
    {
    id: 4,
    title: "Annual Tree Planting",
    date: "Oct 1 2025",
    caption: "Duis aute irure dolor in reprehenderit in voluptate velit esse...",
    description: `Annual Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco`,
    img: "./events/event4.webp",
    calendar: "./calendar.png"
    },
     {
    id: 5,
    title: "2025 Blood Donation Drive",
    date: "Oct 7 2025",
    caption: "Duis aute irure dolor in reprehenderit in voluptate velit esse...",
    description: `Blood Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco`,
    img: "./events/event5.jpg",
    calendar: "./calendar.png"
    },
    {
    id: 6,
    title: "QAT Team Building 2025",
    date: "Dec 7 2025",
    caption: "Duis aute irure dolor in reprehenderit in voluptate velit esse...",
    description: `Team building Lorem ipsum dolor sit amet, consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco`,
    img: "./events/event6.avif",
    calendar: "./calendar.png"
    }
    ];
   
    const [currentPage, setCurrentPage] = useState(1);
    const eventsPerPage = 2;

    const indexOfLast = currentPage * eventsPerPage;
    const indexOfFirst = indexOfLast - eventsPerPage;
    const currentEvents = events.slice(indexOfFirst, indexOfLast);

    const totalPages = Math.ceil(events.length / eventsPerPage);
  return (
    <>
        <section className="events container my-4 pb-5">
                <h3 className="text-center fw-bold mb-4 pt-md-1 pt-5 pb-4">Latest Events</h3>
                

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
                                <p className="card-text">{event.caption}</p>
                                <button 
                                    type='button' 
                                    className='btn btn-primary' 
                                    data-bs-toggle='modal' 
                                    data-bs-target='#event'
                                    onClick={() => setSelectedEvent(event)} >
                                    Learn more
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            
                    {/* POP-UP MODAL */}
                    <div className="modal fade" id="event" tabIndex="-1" role="dialog" aria-labelledby="event" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                            <div className="modal-content">
                                {selectedEvent && (
                                <>
                                <div className="modal-header bg-primary text-white text-start">
                                            <h6 className="modal-title">{selectedEvent.title}</h6>
                                            <button type='button' className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>

                                    <div className="modal-body">
                                            <div className="row text-justified">
                                                <img src={selectedEvent.img} className='img-fluid'/>
                                                <div className='mb-md-3 mb-2'>
                                                <h4 className='text-center mt-md-3 mt-2 fw-bold'>{selectedEvent.title}</h4>
                                                
                                                <ul className="entry-meta list-unstyled d-flex align-items-center justify-content-center mb-0">
                                                    <li>
                                                        <a className="fs-7 text-secondary text-decoration-none d-flex align-items-center">
                                                        <img src='./calendar.png' className='img-fluid'/>
                                                        <span className="ms-2 fs-7">{selectedEvent.date}</span>
                                                        </a>
                                                        
                                                    </li>
                                                </ul>
                                                
                                                </div>
                                                <p className='events-p p-4'>{selectedEvent.description}</p>
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

                <nav className="d-flex justify-content-md-end justify-content-center">
                    <ul className="pagination">
                        {/* PREV */}
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                        <button
                            className="page-link"
                            aria-label="Previous"
                            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <span aria-hidden="true">&laquo;</span>
                        </button>
                        </li>

                        {/* CURRENT */}
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

                        {/* NEXT */}
                        <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                        <button
                            className="page-link"
                            aria-label="Next"
                            onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <span aria-hidden="true">&raquo;</span>
                        </button>
                        </li>
                    </ul>
                </nav>


        </section>
    </>
  )
}

export default Events