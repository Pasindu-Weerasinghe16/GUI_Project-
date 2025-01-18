import React from "react";
import "./CountryDiscription.css";
import img1 from '../../public/photos/eiffel-tower.jpg';
import img2 from '../../public/photos/France_02.webp';
import img3 from '../../public/photos/Franch_03.jpeg';
import img4 from '../../public/photos/Franch_04.jpeg';
const CountryDiscription = () => {
    return (
        <>

            <div className="banner-area">

            </div >

            < section className="light" >
                <div className="container py-2">
                    <div className="h1 text-center text-dark pb-4" id="pageHeaderTitle">
                        Welcome To <span><i style={{ color: "red" }}>France</i></span>
                    </div>


                    <article className="postcard light blue" id="lotus">
                        <a className="postcard__img_link" href="#">
                            <img
                                className="postcard__img"
                                src={img1}
                                alt="Lotus Tower"
                            />
                        </a>
                        <div className="postcard__text t-dark" style={{ paddingRight: "40px" }}>
                            <h1 className="postcard__title blue">
                                <a>Eiffel Tower</a>
                            </h1>
                            <div className="postcard__subtitle small">
                                <time dateTime="202-01-14 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>Tue, January 14th 2025
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">
                                The Eiffel Tower, located in Paris, France, is a 330 m (1,083 ft) tall iron structure that has become a global cultural icon of France and a world-renowned landmark. Completed in 1889, it was initially the tallest man-made structure in the world until 1930. As of today, the Eiffel Tower remains a prominent symbol of architectural brilliance and innovation. It is the most-visited paid monument in the world, attracting millions of visitors annually. The tower serves as a popular observation point, a historical monument, and a venue for various cultural and entertainment events, embodying Paris's charm and legacy.
                            </div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item">
                                    <i className="fa fa-compass" aria-hidden="true"></i> Book Now
                                </li>
                            </ul>
                        </div>
                    </article>


                    <article className="postcard light blue" id="lotus">
                        <a className="postcard__img_link" href="#">
                            <img
                                className="postcard__img"
                                src={img2}
                                alt="Lotus Tower"
                            />
                        </a>
                        <div className="postcard__text t-dark" style={{ paddingRight: "40px" }}>
                            <h1 className="postcard__title blue">
                                <a>Mont Saint-Michel</a>
                            </h1>
                            <div className="postcard__subtitle small">
                                <time dateTime="2022-12-25 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>Tue, January 14th 2025
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">
                                Mont-Saint-Michel, located in Normandy, France, is a breathtaking island commune rising 92 meters (302 ft) above sea level. Known for its striking medieval architecture, the island is crowned by the Mont-Saint-Michel Abbey, a UNESCO World Heritage Site. This iconic structure dates back to the 8th century and has served as a pilgrimage site, monastery, and fortress. Surrounded by tidal waters, Mont-Saint-Michel transforms from an island at high tide to accessible land at low tide, adding to its mystical allure. Today, it stands as a symbol of French heritage, attracting millions of visitors annually with its historical, religious, and architectural significance.
                            </div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item">
                                    <i className="fa fa-compass" aria-hidden="true"></i> Book Now
                                </li>
                            </ul>
                        </div>
                    </article>


                    <article className="postcard light blue" id="lotus">
                        <a className="postcard__img_link" href="#">
                            <img
                                className="postcard__img"
                                src={img3}
                                alt="Lotus Tower"
                            />
                        </a>
                        <div className="postcard__text t-dark" style={{ paddingRight: "40px" }}>
                            <h1 className="postcard__title blue">
                                <a>French Alps</a>
                            </h1>
                            <div className="postcard__subtitle small">
                                <time dateTime="2022-12-25 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>Tue, January 14th 2025
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">
                                If your ideal French vacation involves a little more nature and a little less city, head to the French Alps. Here, you'll find some of the best ski slopes in Europe, as well as beautiful scenery that rivals any work of art or architecture. In summer, the typically snow-covered mountains thaw just enough to create perfect conditions for hiking and biking. Enchanting villages sit at the base of the range, offering several places to unwind when you've had enough fun on the slopes or trails.</div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item">
                                    <i className="fa fa-compass" aria-hidden="true"></i> Book Now
                                </li>
                            </ul>
                        </div>
                    </article>



                    <article className="postcard light blue" id="lotus">
                        <a className="postcard__img_link" href="#">
                            <img
                                className="postcard__img"
                                src={img4}
                                alt="Lotus Tower"
                            />
                        </a>
                        <div className="postcard__text t-dark" style={{ paddingRight: "40px" }}>
                            <h1 className="postcard__title blue">
                                <a>Montpellier</a>
                            </h1>
                            <div className="postcard__subtitle small">
                                <time dateTime="2022-12-25 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>Tue, January 14th 2025
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">
                                Montpellier, located in southern France near the Mediterranean coast, is a vibrant city known for its rich history, cultural diversity, and youthful energy. As the capital of the Hérault department, it is a hub for education, art, and innovation, boasting one of the oldest universities in the world, the University of Montpellier, founded in 1220. The city’s charm is enhanced by its blend of medieval architecture and modern urban design, with landmarks like the Place de la Comédie, the Arc de Triomphe, and the Saint-Pierre Cathedral. Montpellier’s Mediterranean climate, lively festivals, and proximity to beaches make it a favorite destination for both locals and tourists.</div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item">
                                    <i className="fa fa-compass" aria-hidden="true"></i> Book Now
                                </li>
                            </ul>
                        </div>
                    </article>




                </div>
            </section >
            < a href="#top" className="to-top" >
                <i className="fas fa-chevron-up"></i>
            </a >
        </>
    );
};

export default CountryDiscription;
