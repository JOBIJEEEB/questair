import './home.css';
import { useState } from 'react';

const News = () => {
    const [selectedNews, setSelectedNews] = useState();
    const newsData = [
    // FIRST PAGE
    [
        {
        img: "./news/business.jpg",
        category: "Business",
        title: "Philippine Business Conference and Expo",
        date: "Aug 22 2025",
        calendar: "./calendar.png",
        description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
        dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`
        },
        {
        img: "./news/tech.jpg",
        category: "Milestone",
        title: "QAT Achieves ISO 12345:2025 Certification",
        date: "Aug 22 2025",
        calendar: "./calendar.png",
        description: `dolor sit amet, consectetur, 
        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
        dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`
        },
        {
        img: "./news/3.jpg",
        category: "Business",
        title: "Building Constructions Rebounded by 13%",
        date: "Aug 22 2025",
        calendar: "./calendar.png",
        description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
        inventore verit minima veniam, quis nostrum 
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`
        },
    ],

    // SECOND PAGE
    [
        {
        img: "./news/4.jpg",
        category: "Business",
        title: "10 New Infrastructure Companies 2025",
        date: "Aug 23 2025",
        calendar: "./calendar.png",
        description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
        adipisci velit, sed quia non numqua`
        },
        {
        img: "./news/ai.jpg",
        category: "Technology",
        title: "AI Trends and Innovations in the Philippines 2025",
        date: "Aug 23 2025",
        calendar: "./calendar.png",
        description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
        inventore veritatis ea incidunt ut labore Ut enim ad minima veniam, quis nostrum 
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`
        },
        {
        img: "./news/news5.webp",
        category: "Business",
        title: "Philippines Construction Equipment Market Outlook 2025-2030",
        date: "Aug 23 2025",
        calendar: "./calendar.png",
        description: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
        adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et 
        dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
        exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`
        },
    ],
    ];
  return (
    <>
        <section className="news container py-md-5 p-md-0 mb-md-4 mb-0">
            <div className="row justify-content-md-center">
                <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                    <h3 className="mb-4 fw-bold text-center">Latest News</h3>
                </div>
            </div>

        <div id="news" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
            {newsData.map((slide, slideIndex) => (
                <div key={slideIndex} className={`carousel-item ${slideIndex === 0 ? "active" : ""}`}>
                    <div className="row text-start justify-content-center">
                        {slide.map((item, idx) => (
                            <button className="btn border-0 text-start col-md-4 col-10 my-3" key={idx} data-bs-toggle='modal' data-bs-target='#newsModal' onClick={() => setSelectedNews(item)}>
                            <div className="card">
                                <div className='news-img-wrapper'>
                                    <img
                                    src={item.img}
                                    className="card-img-top news-img"
                                    alt={item.title}
                                    /> 
                                    
                                    <button 
                                    className="btn border-0 shadow-none overlay rounded-0 d-flex align-items-center justify-content-center" 
                                    data-bs-toggle='modal' 
                                    data-bs-target='#newsModal'
                                    onClick={() => setSelectedNews(item)}
                                    >
                                    <div className="text-center text-white">
                                        <img src ='./eye.png' className='img-fluid eye' /> 
                                        <p>Read More</p>
                                    </div>
                                    </button>

                                </div>
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
                            
                            </button>
                        ))}
                    </div>
                </div>
            ))}
            </div>

            {/* MODAL */}
            <div className="modal fade" id="newsModal" tabIndex="-1" role="dialog" aria-labelledby="event" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg" role="document">
                    <div className="modal-content">
                        {selectedNews && (
                            <>
                            
                            <div className="modal-header bg-primary text-white text-start">
                                <h6 className="modal-title">{selectedNews.title}</h6>
                                <button type='button' className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                    <div className="row">
                                        <img src={selectedNews.img} className='img-fluid px-3'/>
                                        <div className='mb-md-3 mb-2'>
                                        <h4 className='text-center mt-md-3 mt-2 fw-bold'>{selectedNews.title}</h4>
                                        
                                        <ul className="entry-meta list-unstyled d-flex align-items-center justify-content-center mb-0">
                                            <li>
                                                <a className="fs-7 text-secondary text-decoration-none d-flex align-items-center">
                                                <img src='./calendar.png' className='img-fluid'/>
                                                <span className="ms-2 fs-7">{selectedNews.date}</span>
                                                </a>
                                                
                                            </li>
                                        </ul>
                                        
                                        </div>
                                            <p className='news-p px-md-5 px-4'>{selectedNews.description}</p>
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
        </div> 

        <div className="d-flex justify-content-md-between justify-content-center gap-md-0 gap-4 mt-2">
            <button className="btn btn-outline-primary" type="button" data-bs-target="#news" data-bs-slide="prev" > ◀ Prev </button>
            <button className="btn btn-outline-primary" type="button" data-bs-target="#news" data-bs-slide="next" > Next ▶ </button>
        </div>
        </section>
    </>
  )
}

export default News