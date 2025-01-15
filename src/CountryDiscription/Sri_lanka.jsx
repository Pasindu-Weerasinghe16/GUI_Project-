import React from "react";
import "./Sri_Lanka.css";
import imgS1 from '../../public/photos/Sri_Lanka_00.jpg';
import imgS2 from '../../public/photos/Sri_lanka_01.jpg';
import imgS3 from '../../public/photos/Sri_Lanaka_02.jpg';
import imgS4 from '../../public/photos/Sri_lanka_03.jpg';
const CountryDiscription_SriLanka = () => {
    return (
        <>

            <div className="banner-area2">

            </div >
            {/* Blog Section */}
            < section className="light" >
                <div className="container py-2">
                    <div className="h1 text-center text-dark pb-4" id="pageHeaderTitle">
                        Welcome To <span><i style={{ color: "red" }}>Sri Lanka</i></span>
                    </div>

                    {/* Post: Lotus Tower */}
                    <article className="postcard light blue" id="lotus">
                        <a className="postcard__img_link" href="#">
                            <img
                                className="postcard__img"
                                src={imgS1}
                                alt="Lotus Tower"
                            />
                        </a>
                        <div className="postcard__text t-dark" style={{ paddingRight: "40px" }}>
                            <h1 className="postcard__title blue">
                                <a>Lion Rock</a>
                            </h1>
                            <div className="postcard__subtitle small">
                                <time dateTime="202-01-14 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>Tue, January 14th 2025
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">
                                Lion Rock, famously known as Sigiriya, is an iconic ancient fortress located in the Matale District of Sri Lanka. Rising 200 meters (660 ft) above the surrounding plains, this UNESCO World Heritage Site is a masterpiece of urban planning and artistry. Constructed in the 5th century AD by King Kashyapa, the site features remarkable frescoes, beautifully landscaped gardens, and a massive pair of lion’s paws carved into the rock's base, which give it its name.

                                Sigiriya served as a royal palace and later as a Buddhist monastery. Visitors can ascend the rock via a series of steps and pathways, leading to breathtaking views and the ruins of the ancient palace at the summit. It stands today as a symbol of Sri Lanka’s rich cultural heritage and attracts travelers from around the world.</div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item">
                                    <i className="fa fa-compass" aria-hidden="true"></i> Book Now
                                </li>
                            </ul>
                        </div>
                    </article>


                    <article className="postcard light blue" id="lotus">
                        <a className="postcard__img_link" href="#">
                            <img style={{ backgroundAttachment: "fixed" }}
                                className="postcard__img"
                                src={imgS2}
                                alt="Lotus Tower"
                            />
                        </a>
                        <div className="postcard__text t-dark" style={{ paddingRight: "40px" }}>
                            <h1 className="postcard__title blue">
                                <a>Galle Fort</a>
                            </h1>
                            <div className="postcard__subtitle small">
                                <time dateTime="2022-12-25 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>Tue, January 14th 2025
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">
                                Galle Fort, located in the city of Galle on the southern coast of Sri Lanka, is a historic fortress with roots dating back to the 16th century. Built initially by the Portuguese and extensively fortified by the Dutch in the 17th century, it is now a UNESCO World Heritage Site. This iconic structure showcases a blend of European architectural styles infused with South Asian traditions.

                                The fort encompasses cobblestone streets, colonial-era buildings, museums, boutique hotels, and quaint cafes, offering a glimpse into Sri Lanka's colonial history. Key attractions include the Galle Lighthouse, the Dutch Reformed Church, and the iconic fort walls, which provide panoramic views of the Indian Ocean. Galle Fort remains a vibrant cultural hub, celebrated for its historical significance, charming ambiance, and artistic community.</div>
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
                                src={imgS3}
                                alt="Lotus Tower"
                            />
                        </a>
                        <div className="postcard__text t-dark" style={{ paddingRight: "40px" }}>
                            <h1 className="postcard__title blue">
                                <a>Nine Arches Bridge</a>
                            </h1>
                            <div className="postcard__subtitle small">
                                <time dateTime="2022-12-25 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>Tue, January 14th 2025
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">
                                The Nine Arches Bridge, also known as the Bridge in the Sky, is a stunning viaduct located in Ella, Sri Lanka. Built during the British colonial era in the early 20th century, this iconic railway bridge is a marvel of engineering, constructed entirely of stone and brick without the use of steel. Spanning 91 meters (300 ft) in length and rising 24 meters (80 ft) above the dense jungle below, the bridge features nine graceful arches that create a picturesque sight.

                                Surrounded by lush greenery and tea plantations, the Nine Arches Bridge is a popular destination for travelers seeking scenic views and a touch of history. The sight of a train crossing the bridge, framed by the misty mountains, is a quintessential image of Sri Lanka's hill country. It is a testament to the country's rich heritage and natural beauty.  </div>
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
                                src={imgS4}
                                alt="Lotus Tower"
                            />
                        </a>
                        <div className="postcard__text t-dark" style={{ paddingRight: "40px" }}>
                            <h1 className="postcard__title blue">
                                <a>Mirissa Beach</a>
                            </h1>
                            <div className="postcard__subtitle small">
                                <time dateTime="2022-12-25 12:00:00">
                                    <i className="fas fa-calendar-alt mr-2"></i>Tue, January 14th 2025
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">
                                Mirissa Beach, located on the southern coast of Sri Lanka, is a tropical paradise renowned for its golden sands, turquoise waters, and laid-back atmosphere. This crescent-shaped beach is a favorite destination for both locals and tourists, offering the perfect blend of relaxation and adventure.

                                Mirissa is particularly famous for its whale and dolphin watching tours, as it is one of the best locations in the world to spot blue whales. The beach also offers opportunities for snorkeling, surfing, and paddleboarding. The iconic Parrot Rock, a small rocky islet accessible during low tide, provides stunning panoramic views of the coastline.

                                With its beachfront cafes, vibrant nightlife, and tranquil charm, Mirissa Beach is an ideal getaway for anyone looking to experience the natural beauty and hospitality of Sri Lanka. </div>
                            <ul className="postcard__tagbox">
                                <li className="tag__item">
                                    <i className="fa fa-compass" aria-hidden="true"></i> Book Now
                                </li>
                            </ul>
                        </div>
                    </article>


                    {/* Repeat similar blocks for other articles */}

                </div>
            </section >
            {/* Scroll to Top */}
            < a href="#top" className="to-top" >
                <i className="fas fa-chevron-up"></i>
            </a >
        </>
    );
};

export default CountryDiscription_SriLanka;
